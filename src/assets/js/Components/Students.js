
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.js";

import "./Students.css"

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     iframeWidth: "",
        //     iframeHeight: "",
        //     count: 1
        // };
        this.state = {
            count: 1
        };
        this.myIframeRef = React.createRef();
      }

    // componentDidMount() {

        // window.pollIframe = setInterval(()=>{
        //     console.log();

        //     // How Excel exported it was Student-Ratings.htm contains frame to sheet001.html. 
        //     // And we are doing iframe to Student-Ratings.htm because if it's just sheet001.html itself, it will redirect back to Student-Ratings.htm
        //     // These were files exported from Excel so it's not my code doing this behavior. Some performance hits from this.
            
        //     // Need to adjust draggable/scrolling behavior on mobile as to not get locked into a view
        //     // this.myIframeRef.current?.contentWindow?.document?.querySelector("frameset").setAttribute("scrolling", "no");
        //     // this.myIframeRef.current?.contentWindow?.document?.querySelector("frame").setAttribute("scrolling", "no");
            
        //     let scrollWidth =this.myIframeRef.current?.contentWindow?.document?.querySelector("frame")?.contentWindow?.document?.body?.scrollWidth
        //     if(scrollWidth) {

        //         clearInterval(window.pollIframe)
        //         // let scrollHeight = this.myIframeRef.current?.contentWindow?.document?.querySelector("frame")?.contentWindow?.document?.body?.clientHeight
        //         // let scrollHeight = this.myIframeRef.current?.contentWindow?.document?.querySelector("frame")?.contentWindow?.document?.querySelector("table")?.clientHeight
        //         let scrollHeight = this.myIframeRef.current?.contentWindow?.document?.querySelector("frame")?.contentWindow?.document?.querySelector("tbody tr:last-child")?.offsetTop;

        //         // console.log({scrollWidth,scrollHeight})

        //         // iOS Bug causing iFrame at some point of dragging to be stuck and unable to scroll out of that view
        //         // Maybe: https://stackoverflow.com/questions/58159526/draggable-element-in-iframe-on-mobile-is-buggy
        //         document.getElementsByTagName("body")[0].addEventListener("touchstart",function(){});

        //         // offsetTop or scrollHeight or clientHeight all produced >1000px white space below the table
        //         this.setState({
        //             ...this.state,
        //             iframeWidth: scrollWidth + "px",
        //             iframeHeight: parseInt(Math.abs(scrollHeight-1200+120)) + "px"
        //         })
        //     }
        // }, 200)


    // } // componentDidMount


    componentDidMount() {
        const parent = document.body.querySelector(".body-fixed");
        parent.addEventListener('scroll', this.onScroll.bind(this));


        // iOS Bug causing iFrame at some point of dragging to be stuck and unable to scroll out of that view
        // Maybe: https://stackoverflow.com/questions/58159526/draggable-element-in-iframe-on-mobile-is-buggy
        // document.getElementsByTagName("body")[0].addEventListener("touchstart",function(){});

        // offsetTop or scrollHeight or clientHeight all produced >1000px white space below the table
        this.setState({
            ...this.state
        })
        // this.setState({
        //     ...this.state,
        //     iframeWidth: scrollWidth + "px",
        //     iframeHeight: parseInt(Math.abs(scrollHeight-1200+120)) + "px"
        // })
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
      }

    onScroll() {

        // console.log("Scrolling")
        const whereStudentRatingsAt = document.querySelector("#student-ratings-iframe-wrapper").getBoundingClientRect().top;
        if (whereStudentRatingsAt<121) {
            // console.log("Reached Student header")
            console.log("Reached")
        } else {
            // console.log("")
        }

        // console.log("Scrolling")
        const whereStudentHeaderAt = document.querySelector("#student-ratings-browser").getBoundingClientRect().top;
        if (whereStudentHeaderAt<121) {
            // console.log("Reached Student header")
            if(this?.props?.changeToPageMode) {
                this.props.changeToPageMode(true)
            }
            this.setState({
                ...this.state,
                stickiedWhite: true
            })
        } else {
            if(this?.props?.changeToPageMode) {
                this.props.changeToPageMode(false)
            }
            this.setState({
                ...this.state,
                stickiedWhite: false
            })
        }
    };

    navigateLeft() {
        if(this.state.count===1) {
        } else {
            this.setState({
                ...this.state,
                count:this.state.count-1
            });
        }
    } // navigateLeft

    navigateRight() {
        if(this.state.count===4) {
        } else {
            this.setState({
                ...this.state,
                count:this.state.count+1
            });
        }
    } // navigateRight

    render() {
        return (
            <>
                {/* <div className="spacer-20px">&nbsp;</div> */}

            <div id="students" style={{position:"relative", width:"100vw"}}>
                <center>

                <h2 id="student-ratings-browser" className={this.props.stickiedWhite?"sticked-white":""}>
                    <div>
                        <i className={"browse-left fa fa-arrow-left fs-2 " + (this.state.count===1?"text-darkgray opacity-50":"text-white clickable")} onClick={this.navigateLeft.bind(this)}></i>
                        <span>Students:</span>
                        <i className={"browse-right fa fa-arrow-right fs-2 " +(this.state.count===4?"text-darkgray opacity-50":"text-white clickable")} onClick={this.navigateRight.bind(this)}></i>            
                    </div>
                    <div className="mobile-instructions">
                        <small><center>Using mobile? <i className="fas fa-arrows-alt"></i> Drag table from here. <a onClick={()=>{alert('hi');}}><i className="fas fa-table"></i> Or hide columns</a>.</center></small>
                    </div>

                </h2>


                <div className={"rotation rotation-1 " + (this.state.count!==1?"d-none":"")}>
                    <div id="tutor-students-ratings-testimonials" className="tag-description-line">Coding students giving me excellant testimonials. See <i>Topic(s) Covered</i> for what languages I teach.</div>
                    <p></p>
                    <div id="tutor-request-feed-back-wrapper" style-deprecating={{width:this.state.iframeWidth?this.state.iframeWidth:"100%"}}>
                        <img className="tutor-request-feedback mt-2" src="./src/assets/img/students/testimonials-tutor/a.png"></img>
                    </div>
                    {/* <iframe src="./src/embeds/student-ratings/Student-Ratings.htm"  */}
                    {/* <iframe src="./src/embeds/student-ratings/Student-Ratings.fld/sheet001.htm"  */}
                    <div id="student-ratings-iframe-wrapper"
                            // style={this.state.iframeHeight?{
                            //     height:this.state.iframeHeight
                            // }:{}}
                    >
                        <iframe src="./src/embeds/student-ratings/Student-Ratings.fld/sheet001.htm" 
                            style={{
                                // height:this.state.iframeHeight?this.state.iframeHeight:"800px", 
                                // width:this.state.iframeWidth?this.state.iframeWidth:"100%", 
                                width: "100%",
                                backgroundColor:"white",
                                overflow:"hidden"
                            }} 
                            ref={this.myIframeRef}>

                        </iframe>
                    </div>
                </div>

                <div className={"rotation rotation-2 " + (this.state.count!==2?"d-none":"")}>
                    <div className="pt-3 pb-3 tag-description-line">My supervisors giving me a shout out on the Slack platform which we use for Full Stack Coding Bootcamp students to reach us.</div>
                    <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/testimonials-la/a.png"></img>
                    <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/testimonials-la/d.png"></img>
                    <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/testimonials-la/c.png"></img>
                    <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/testimonials-la/b.png"></img>
                    <br/><br/>
                </div>

                <div className={"rotation rotation-3 " + (this.state.count!==3?"d-none":"")}>
                    <div className="tag-description-line">Excellant ratings. Rating Percentage is how many Full Stack Coding Bootcamp students actually gave a score which is optional after tutoring. But all the students who rated gave me the max 5 stars. My Average Rating is 5 out of 5. Please notice I outperform the Goal Average Rating.</div>
                    <div className="subgroup">
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/a.png"></img>
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/b.png"></img>
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/c.png"></img>
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/d.png"></img>
                        <br/><br/>
                    </div>
                </div>

                <div className={"rotation rotation-4 " + (this.state.count!==4?"d-none":"")}>
                    {/* <div className="spacer-20px">&nbsp;</div> */}
                    <div className="tag-description-line">I consistently outperform the team at comparison metric Team vs You.</div>
                    <div className="subgroup">
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/a2.png"></img>
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/b2.png"></img>
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/c2~.png"></img>
                        <img className="pt-3 pb-3 tutor-la-misc" src="./src/assets/img/students/scores-la/d2.png"></img>
                        <br/><br/>
                    </div>
                </div>

                </center>
            </div>

            </>
        )
    }
}