
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.js";

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
                <div className="flushed-left">
                    <i className={"fa fa-arrow-left fs-2 " + (this.state.count===1?"text-gray":"text-white clickable")} onClick={this.navigateLeft.bind(this)}></i>
                </div>
                <div className="flushed-right">
                    <i className={"fa fa-arrow-right fs-2 " +(this.state.count===3?"text-gray":"text-white clickable")} onClick={this.navigateRight.bind(this)}></i>
                </div>
                <div className="spacer-50px">&nbsp;</div>

                <div className={"rotation rotation-1 " + (this.state.count!==1?"d-none":"")}>
                    <p className="tag-description-line">Coding bootcamp students giving me excellant testimonials on tutoring them.</p>

                    <img src="./src/assets/img/students/testimonials-tutor/a.png"></img>
                    <img src="./src/assets/img/students/testimonials-tutor/b.png"></img>
                    <img src="./src/assets/img/students/testimonials-tutor/c.png"></img>
                    <img src="./src/assets/img/students/testimonials-tutor/d.png"></img>
                    <img src="./src/assets/img/students/testimonials-tutor/e.png"></img>
                </div>

                <div className={"rotation rotation-2 " + (this.state.count!==2?"d-none":"")}>
                    <p className="tag-description-line">My supervisors gaving a shout out on the Slack platform we use for students to reach us.</p>
                    <img src="./src/assets/img/students/testimonials-la/a.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/b.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/c.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/d.png"></img>
                </div>

                <div className={"rotation rotation-3 " + (this.state.count!==3?"d-none":"")}>
                    <p className="tag-description-line">The "Rating Percentage" is how many students actually gave a score after a tutoring session which is optional. But all the students who rated gave me 5 stars, therefore my "Average Rating" is 5</p>
                    <div className="subgroup">
                        <img src="./src/assets/img/students/scores-la/a.png"></img>
                        <img src="./src/assets/img/students/scores-la/b.png"></img>
                        <img src="./src/assets/img/students/scores-la/c.png"></img>
                        <img src="./src/assets/img/students/scores-la/d.png"></img>
                    </div>

                    <div className="spacer-50px">&nbsp;</div>
                    <p className="tag-description-line">I consistently outperform the team at the Team vs You comparison metric.</p>
                    <div className="subgroup">
                        <img src="./src/assets/img/students/scores-la/a2.png"></img>
                        <img src="./src/assets/img/students/scores-la/b2.png"></img>
                        <img src="./src/assets/img/students/scores-la/c2~.png"></img>
                        <img src="./src/assets/img/students/scores-la/d2.png"></img>
                    </div>
                </div>

            </>
        )
    }
}