
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.js";
import "./Testimonials.css"

// Merge in Student Ratings
import Students from "./Students"

export default class Testimonials extends React.Component {
    constructor() {
        super()
        this.state = {
            stickiedWhite: false
        }
    }

    componentDidMount() {
        const parent = document.body.querySelector(".body-fixed");
        parent.addEventListener('scroll', this.onScroll.bind(this));
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
      }

    onScroll() {
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
    

    // onScroll() {
    //     console.log("Scrolling")
    //     const whereStudentHeaderAt = document.querySelector("#student-ratings-browser").getBoundingClientRect().top;
    //     if (whereStudentHeaderAt<121) {
    //         if(this?.props?.changeToPageMode) {
    //             this.props.changeToPageMode(true)
    //         }
    //     } else {
    //         if(this?.props?.changeToPageMode) {
    //             this.props.changeToPageMode(false)
    //         }
    //     }
    // };
    
    render() {
        return (
            <div id="testimonials">
                <h2>Clients:</h2>
                <div className="client-testimonials">
                    <a href="https://www.linkedin.com/in/weng-fung/#recommendations" target="_blank"><img className="clients-1" src="./src/assets/img/testimonials.png"></img></a>
                </div>

                <hr style={{border: "1px solid black", marginTop:"40px"}}/>
                <Students stickiedWhite={this.state.stickiedWhite}/>
            </div>
        )
    }
}