
import React from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";

export default class WhoAmI extends React.Component {
    render() {
        return (
                <div data-component="WhoAmI">

                    <div className="wrapper max-width">
                   
                        <div className="sides mt-2">

                            <div className="side-a">&nbsp;</div>
                            <div className="side-b">&nbsp;</div>
                            <div className="side-c">
                                <img className="hidden-600px-up me" src="https://wengindustry.com/me/src/assets/img/me.png" alt="Picture of me"></img>
                                <h2 id="about-anchor" className="f1a">Full Stack Developer<br/><address className="author">Weng Fei Fung</address></h2>
                                <p>Full stack developer with a background in nursing. 5 years of freelancing jQuery/PHP/MySQL. Certified with top marks at UCLA for MERN stack (MongoDB/Mongoose, Express, React, Node) and GraphQL. Have worked with startups including Mixotype, and companies like ExRx and People's Care. Known as an innovative problem solver, developer friends go to me when they are stuck or have startup ideas. My strong points are jQuery, React, PHP, Express JS, and Node. My strength is in listening to business requirements and translating them into real products. In the future I'd like to take a more entrepreneurship and management role combining healthcare and programming in the hospital setting, as I saw a need for charting software made by healthcare professionals.</p>

                                <aside className="badges">

                                    <a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://camo.githubusercontent.com/0f56393c2fe76a2cd803ead7e5508f916eb5f1e62358226112e98f7e933301d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d626c75653f7374796c653d666c6174266c6f676f3d6c696e6b6564696e266c6162656c436f6c6f723d626c7565"
                                            className="github-style badge-style" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue"/></a>

                                    <a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>


                                    <a target="_blank" href="https://www.youtube.com/user/Siphon880yt/" rel="nofollow">
                                        <img src="https://camo.githubusercontent.com/0bf5ba8ac9f286f95b2a2e86aee46371e0ac03d38b64ee2b78b9b1490df38458/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f596f75747562652d7265643f7374796c653d666c6174266c6f676f3d796f7574756265266c6162656c436f6c6f723d726564"
                                            className="github-style badge-style" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red"/>
                                    </a>
                                    
                                </aside>

                                <aside class="info-spacer" style={{width:"1px", height:"10px"}}></aside>

                            </div>
                        </div>
            
                        </div>
                    </div>
        )
    }
}
