
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

                                            <h2 id="about-anchor" className="f1a"><address className="author">Weng Fei Fung</address></h2>
                                            <div className="f1b">
                                                <p>Passionate about all things coding 💻 especially web development 🌎, Weng has made this a hobby and side job for five years. Have worked with startups including Mixotype, companies like ExRx, and small gigs by word of mouth (with jQuery/Php/MySQL). Certified in MERN (MongoDB, Mongoose, Express, React, Node) and GraphQL with top marks at <span className="ucla">UCLA</span>-Trilogy Coding Bootcamp.</p>
                                                <p>He is looking forward to working with your company as a web developer. See <NavLink to="./testimonials">Testimonials</NavLink>.</p>

                                                <aside className="badges">

                                                    <a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://camo.githubusercontent.com/0f56393c2fe76a2cd803ead7e5508f916eb5f1e62358226112e98f7e933301d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d626c75653f7374796c653d666c6174266c6f676f3d6c696e6b6564696e266c6162656c436f6c6f723d626c7565"
                                                            className="github-style badge-style" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue"/></a>

                                                    <a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>


                                                    <a target="_blank" href="https://www.youtube.com/user/Siphon880yt/" rel="nofollow">
                                                        <img src="https://camo.githubusercontent.com/0bf5ba8ac9f286f95b2a2e86aee46371e0ac03d38b64ee2b78b9b1490df38458/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f596f75747562652d7265643f7374796c653d666c6174266c6f676f3d796f7574756265266c6162656c436f6c6f723d726564"
                                                            className="github-style badge-style" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red"/>
                                                    </a>
                                                    
                                                </aside>

                                            </div>
                                        </div>
                                    
                                </span>
                            </div>
                        </div>
                    </div>
        )
    }
}
