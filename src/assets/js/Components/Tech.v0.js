
import React from "react";
import ReactDOM from "react-dom";

export default class Tech extends React.Component {
    render() {
        return (
                <div data-component="Tech" id="slide-a" className="slide slide-a">
                    <div className="wrapper">
                        <div className="background-overlay"></div>
                        <div className="slide slide-hero clear-fix">
                            <div className="line">Hi, I'm Weng</div>
                            <div className="line">Coding Expert</div>
                            <div className="line text-white">Available <a className="for-hire-hero" target="_blank" href="https://www.linkedin.com/in/weng-fung/">for Hire</a></div>
                        </div>
                        <div className="tech-overlay f1a relaxed">
                            <b className="f1b relaxed-more">FRONTEND:</b> JS | CSS3 | HTML5 | React JS<br/>
                            <b className="f1b relaxed-more">BACKEND:</b> Node | MySQL | Sequelize | MongoDB | Mongoose<br/>
                            <b className="f1b relaxed-more">FULL STACK:</b> MERN<br/>
                            <b className="f1b relaxed-more">LEGACY:</b> jQuery | PHP<br/>
                            <b className="f1b relaxed-more">AGILE:</b> Handlebars | Crossroads | Asana/Trello/Basecamp
                        </div>
                    </div>
                </div>
        )
    }
}
