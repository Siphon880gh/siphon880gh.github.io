
import React from "react";
import ReactDOM from "react-dom";
import {Link, NavLink} from "react-router-dom";

// function openWindow(routed) {
//     document.querySelector(`[data-php-rerouter={routed}]`).click();
// }

export default class WhoAmI extends React.Component {
    
    render() {
        return (
                <div data-component="WhoAmI">

                    <div className="wrapper max-width">
                   
                        <div className="sides mt-2">

                            <div className="side-a">&nbsp;</div>
                            <div className="side-b">&nbsp;</div>
                            <div className="side-c">
                                <img className="hidden-950px-up me" src="https://wengindustry.com/me/src/assets/img/me2.jpg" alt="Picture of me"></img>
                                <h2 id="about-anchor" className="f1a">Full Stack Developer<br/><address className="author">Weng Fei Fung</address></h2>

                                <p><i>Cut to the chase? See my <a href="./?page=work">work</a>.</i></p>
                                
                                <p>Full stack developer with 5 years of freelancing <b>Javascript/jQuery/PHP/MySQL</b>. Certified for <b>MERN stack</b> (MongoDB/Mongoose, Express, React, Node) and GraphQL at UCLA extensions, and have been tutoring MERN Coding Bootcamp students as a senior tutor. Have worked with startups including Mixotype, and companies like ExRx and People's Care. Known as an innovative problem solver, developer friends go to me when they are stuck or have startup ideas. My strong points are jQuery, React, PHP, Express JS, and Node. Please see <a target="_blank" href="./?page=testimonials">testimonials</a>.</p>

                                <p>I also like <b>learning new technologies</b>, languages, and frameworks. Have recently developed a proof of concept of Flutter connecting to Firebase, and having Firebase add more data in the backend using Google Cloud Functions. I've also experimented with Jupyter Notebook to make requests for datasets. I am making guides while exploring those technologies (Flutter, Data Science, etc). I am saving them to Obsidian MD which is a notebook software that deals mostly with Markdown MD files. My initial attempt was using my <a href="https://wengindustry.com/tools/snippets-mastery/" target="_blank"> own tool I call Snippets Mastery</a>. Later I wanted to combine the ability to practice typing code with the programming guides so I revamped it into a tool called <a href="https://wengindustry.com/tools/retype-notes/" target="_blank"> Retype Notes</a>. However as Markdown MD is part of the open source community, I've switched over to their software and I want to see if I can make a vault of programming languages and concepts. I plan to publish Quick Start articles for different languages and technologies in the future. In the past I made <a href="https://www.youtube.com/channel/UCg1O9uttSv3ZBzd1iep25Ig" target="_blank">Youtube videos</a>.</p>

                                <p>On the side, I have been tutoring Coding Bootcamp students across the nation as a <b>Senior Tutor</b>. I taught and tutored the MERN stack as well as jQuery and GraphQL. My students have given me <a target="_blank" href="./?page=students">excellant student ratings and testimonials</a>.</p>
                                    
                                <p>In the future I'd like to take a more entrepreneurship role leveraging my technical knowledge to make software for hospitals and clinics. I saw a need for charting software made by healthcare professionals (I continue to work as registered nurse in ICU a few times a month with a staffing agency so I can keep up to date in that industry). In order to learn more entrepreneurship and managing, I am completing <b>Project Management</b> certificates at UC Berkeley and Coursera slated for December 2022. My motto is to always grow your craft.</p>

                                <img className="contributions" src="https://www.wengindustry.com/me/dist/assets/img/contributions-year.png"/>

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
