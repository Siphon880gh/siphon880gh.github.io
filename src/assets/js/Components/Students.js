
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.js";

import "./Students.css"

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 1
        };
      }

    navigateLeft() {
        if(this.state.count===1) {
        } else {
            this.setState({count:this.state.count-1});
        }
    } // navigateLeft

    navigateRight() {
        if(this.state.count===3) {
        } else {
            this.setState({count:this.state.count+1});
        }
    } // navigateRight

    render() {
        return (
            <>
                {/* <div className="spacer-20px">&nbsp;</div> */}

            <div id="students" style={{position:"relative"}}>

                <div className="flushed-left">
                    <i className={"fa fa-arrow-left fs-2 " + (this.state.count===1?"text-gray opacity-50":"text-white clickable")} onClick={this.navigateLeft.bind(this)}></i>
                </div>
                <div className="flushed-right">
                    <i className={"fa fa-arrow-right fs-2 " +(this.state.count===3?"text-gray opacity-50":"text-white clickable")} onClick={this.navigateRight.bind(this)}></i>
                </div>


                <div className={"rotation rotation-1 " + (this.state.count!==1?"d-none":"")}>
                    <div className="tag-description-line">Coding students giving me excellant testimonials. See <i>Topic(s) Covered</i> for what languages I teach.</div>
                    <p></p>
                    <img className="crop-instead-of-shrink" src="./src/assets/img/students/testimonials-tutor/a.png" style={{minWidth: "100%", maxWidth:"100%", margin:0}}></img>
                    <iframe src="./src/embeds/student-ratings/Student-Ratings.htm" style={{width:"100%", height:"800px", backgroundColor:"white"}}></iframe>
                </div>

                <div className={"rotation rotation-2 " + (this.state.count!==2?"d-none":"")}>
                    <div className="tag-description-line">My supervisors giving me a shout out on the Slack platform which we use for students to reach us.</div>
                    <img src="./src/assets/img/students/testimonials-la/a.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/d.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/c.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/b.png"></img>
                </div>

                <div className={"rotation rotation-3 " + (this.state.count!==3?"d-none":"")}>
                    <div className="tag-description-line">Excellant ratings. Rating Percentage is how many students actually gave a score which is optional after tutoring. But all the students who rated gave me the max 5 stars, therefore my Average Rating is 5</div>
                    <div className="subgroup">
                        <img src="./src/assets/img/students/scores-la/a.png"></img>
                        <img src="./src/assets/img/students/scores-la/b.png"></img>
                        <img src="./src/assets/img/students/scores-la/c.png"></img>
                        <img src="./src/assets/img/students/scores-la/d.png"></img>
                    </div>

                    <div className="spacer-20px">&nbsp;</div>
                    <div className="tag-description-line">I consistently outperform the team at the Team vs You comparison metric.</div>
                    <div className="subgroup">
                        <img src="./src/assets/img/students/scores-la/a2.png"></img>
                        <img src="./src/assets/img/students/scores-la/b2.png"></img>
                        <img src="./src/assets/img/students/scores-la/c2~.png"></img>
                        <img src="./src/assets/img/students/scores-la/d2.png"></img>
                    </div>
                </div>
            </div>

            </>
        )
    }
}