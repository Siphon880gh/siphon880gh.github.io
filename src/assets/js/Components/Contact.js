import React from "react";
import ReactDOM from "react-dom";
import "./Contact.css";

export default class Contact extends React.Component {
    componentDidMount() {
        // Init tooltips on hovering over empty text inputs: "This field is required"
        let inputs = document.querySelectorAll(".contact input, .contact textarea");
        inputs.forEach(input=>{
            input.setAttribute("title","This field is required");
            input.setAttribute("data-placement","bottom");
        })

        // Only show the tooltip if textfield is empty
        inputs.forEach(input=>{
            input.addEventListener("mouseover", (event)=>{
                let tooltip = new bootstrap.Tooltip(event.target);
                let hasText = event.target.value.length>0;

                // Hide active tooltips
                document.querySelectorAll(".tooltip.show").forEach(tooltip=>{tooltip.classList.remove("show")});

                if(hasText) {
                    // console.log("disable tooltip");
                    tooltip.disable()
                } else {
                    // console.log("enable tooltip");
                    tooltip.enable()
                }
            });
        })

        // Display for email textfield on keyup: "Correct format is user@domain.ext, eg. user@some-domain.com"
        let email = document.querySelector(".contact .email");
        email.addEventListener("keyup", event=>{
            if(event.target.value.length) {
                if(/^[^@]+@[^@.]+\.[^@]*\w\w$/.test(event.target.value)) {
                    document.querySelector(".email-error span").innerText = "";
                } else {
                    document.querySelector(".email-error span").innerText = "Correct format is user@domain.ext, eg. user@some-domain.com";
                }
            }
        });
    }
    render() {
        function validateFormOnSubmit(event) {
            event.preventDefault();
            event.stopPropagation();

            let form = document.querySelector(".contact form");
            let name = document.querySelector(".contact .name");
            let email = document.querySelector(".contact .email");
            let message = document.querySelector(".contact .message");

            // Clear previous errors
            (function clearErrors() {
                document.querySelector(".name-error span").innerText = "";
                document.querySelector(".email-error span").innerText = "";
                document.querySelector(".message-error span").innerText = "";
            })();
            let errorCount = 0;

            function isFilledInput(input) {
                return input.value.length>0;
            }

            if(!isFilledInput(name)) {
                document.querySelector(".name-error span").innerText = "This field is required.";
                errorCount++;
            }
            if(!isFilledInput(email)) {
                document.querySelector(".email-error span").innerText = "This field is required.";
                errorCount++;
            }
            if(!isFilledInput(message)) {
                document.querySelector(".message-error span").innerText = "This field is required.";
                errorCount++;
            }


            // Future version: Implement saving messages
            if(errorCount===0) {

                const nameVal = name.value, emailVal = email.value, messageVal = message.value;

                fetch(`../me--mailer/index.php`, {
                    method: 'POST',
                    body: (new FormData(document.querySelector(".contact form")))
                })
                .then(data=>data.text())
                .then(data=>{
                    console.log("Sent email: " + data);
                })

                form.reset();

                // Show custom dialog that the form was submitted
                let modal = new bootstrap.Modal(document.querySelector(".modal-contact-submitted"));
                modal.show();
            }
        
        } // validateFormOnSubmit
        
        return (
            <>
            <h2 className="page-title">Contact Weng. He offers consultation, teaching, and building. Here you can also provide feedback on apps or inquiry about business opportunities.</h2>
            <div data-component="Resume" className="contact m-5">
                <form className="p-4" onSubmit={validateFormOnSubmit} action="" method="post">
                    <div className="input-group mb-2">
                        <label >Name</label>
                        <input className="form-control name" placeholder="Your Name" type="text" name="name" tabIndex="1" autoFocus />
                    </div>
                    <div className="error name-error"><span></span></div>

                    <div className="input-group mb-2">
                        <label>Email</label>
                        <input className="form-control email" placeholder="Your Email" type="email" name="email" tabIndex="2" />
                    </div>
                    <div className="error email-error"><span></span></div>

                    <div className="input-group mb-2">
                        <label>Message</label>
                        <textarea className="form-control message" placeholder="Your Message" type="text" name="message" tabIndex="3" />
                    </div>
                    <div className="error message-error"><span></span></div>

                    <div className="clear-fix"></div>
                    <div>
                        <button className="btn btn-primary mt-3" type="submit" name="submit" tabIndex="4">Send</button>
                    </div>
                    <br/><br/>

                    <div className="clear-fix"></div>
                </form>


                <div className="modal modal-contact-submitted fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Submitted</h3>
                            </div>
                            <div className="modal-body">
                                <p>Thanks for sending the message! I'll contact you asap. Have a good day!</p>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
