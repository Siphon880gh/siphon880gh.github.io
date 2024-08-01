
import React from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";

export default class WhoAmI extends React.Component {
    render() {
        return (
                <div data-component="WhoAmI" id="slide-b" className="slide slide-b">

                    <div className="wrapper max-width">

                    <div className="a"></div>
                            <div className="b">
                                <span className="bb1"></span>
                                <span className="bb2">
                                        <div className="flexie mt-2">

                                            {/* <h2 id="about-anchor" className="f1a"><address className="author">Weng Fei Fung</address></h2> */}
                                            <div className="f1b">
                                                {/* <p>Passionate about all things coding 💻 especially web development 🌎, Weng has made this a hobby and side job for five years. Have worked with startups including Mixotype, companies like ExRx, and small gigs by word of mouth (with jQuery/Php/MySQL). Certified in MERN (MongoDB, Mongoose, Express, React, Node) and GraphQL with top marks at <span className="ucla">UCLA</span>-Trilogy Coding Bootcamp.</p>
                                                <p>He is looking forward to working with your company as a web developer. See <NavLink to="./testimonials">Testimonials</NavLink>.</p> */}
                                                
                                                <h2 id="about-anchor" className="f1a">Full Stack Developer<br/><address className="author">Weng Fei Fung</address></h2>
                                                <p>Full stack developer with a background in nursing. 5 years of freelancing jQuery/PHP/MySQL. Certified with top marks at UCLA for MERN stack (MongoDB/Mongoose, Express, React, Node) and GraphQL. Have worked with startups including Mixotype, and companies like ExRx and People's Care. Known as an innovative problem solver, developer friends go to me when they are stuck or have startup ideas. My strong points are jQuery, React, PHP, Express JS, and Node. My strength is in listening to business requirements and translating them into real products. In the future I'd like to take a more entrepreneurship and management role combining healthcare and programming in the hospital setting, as I saw a need for charting software made by healthcare professionals.</p>

                                                <aside className="badges">

                                                    <a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue"
                                                            className="github-style badge-style" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue"/></a>

                                                    <a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>


                                                    <a target="_blank" href="https://www.youtube.com/@WayneTeachesCode/" rel="nofollow">
                                                        <img src="https://img.shields.io/badge/Youtube-red?style=flat&logo=youtube&labelColor=red"
                                                            className="github-style badge-style" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red"/>
                                                    </a>
                                                    
                                                </aside>

                                                <aside class="info-spacer" style={{width:"1px", height:"10px"}}></aside>

                                            </div>
                                        </div>
                                    
                                </span>
                            </div>
                        </div>
                    </div>
        )
    }
}
