
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link, NavLink} from "react-router-dom";
import githubContributions2023 from "../../img/github-contributions-2022.png"
import githubContributions2023march from "../../img/github-contributions-2023-03.png"
import mePic from "../../img/me3.jpg"
import "./WhoAmI.css"

export default class WhoAmI extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        document.querySelectorAll(".wbr-slash").forEach(node => { 
            node.innerHTML = node.innerHTML.replaceAll("/", "/<wbr>")
         });
    }
    
    render() {
        return (
                <div data-component="WhoAmI">

                    <div className="wrapper max-width">
                   
                        <div className="sides mt-2">

                            <div className="side-a">&nbsp;</div>
                            <div className="side-b">&nbsp;</div>
                            <div className="side-c">
                                <img className="hidden-950px-up me" src={mePic} alt="Picture of me"></img>
                                <h2 id="about-anchor" className="f1a">Full Stack Developer<br/><address className="author">Weng Fei Fung</address></h2>

                                <br/><br/>
                                {/* <p><i>Cut to the chase? See 📂 <a href="./?page=work">my work</a>.</i></p> */}
                                <p><i>Cut to the chase? See 📂 <Link to="work">my work</Link>.</i></p>
                                
                                <p>Full stack developer with {(new Date()).getFullYear() - (new Date("01/01/2015")).getFullYear()} years of freelancing {/* Linkedin -> Experience -> ExRx Jan 2015 */} <b className='wbr-slash'>Javascript + jQuery + Handlebars + PHP + MySQL</b>. Have worked with startups including Mixotype, and companies like ExRx and People's Care. Known as an innovative problem solver, developer friends go to me when they are stuck or have startup ideas. My strong points are React, jQuery, Javascript, PHP, MySQL, Express JS, and Node. Please see 📍 <a target="_blank" href="./?page=testimonials">client testimonials</a>.</p>

                                <p>Tutored EdX coding students for {(new Date()).getFullYear() - (new Date("04/21/2021")).getFullYear()} years {/* March 2021 - atm March 2023 */} on the <b>MERN stack + Handlebars + jQuery + MySQL/Sequelize + GraphQL</b>. In addition, MERN Stack is MongoDB/Mongoose, Express, React with Redux, and NodeJS. I am a Senior Tutor who qualified for the entire curriculum because I am MERN certified at UCLA extensions with <Link to="achievements#top-marks">top marks</Link>. Please see 👨🏻‍🏫 <a target="_blank" href="./?page=students"> coding students' reviews</a>.</p>

                                <p>An example of <b>innovation</b> is this portfolio where I combined PHP and htaccess with React to speed up development and allow you to visit links directly to a part of the SPA. Since it's not a mix of API and HTML files, skipping Express JS server routes makes sense. By knowing multiple generations of coding languages (JS/jQuery/Handlebars/PHP/MySQL, MERN, and GraphQL), I can offer innovative solutions to your unique business needs.</p>

                                <p>I am passionate about <b>learning and sharing new technologies</b>, languages, and frameworks. Have recently developed a proof of concept of Flutter connecting to Firebase, and having Firebase add more data in the backend using Google Cloud Functions. I've also experimented with Jupyter Notebook to make requests for datasets. I am making guides while exploring those technologies (Flutter, Data Science, etc). I am saving them to Obsidian MD which is a notebook software that deals mostly with Markdown MD files. My initial attempt was using my own tool I call <a href="https://wengindustry.com/tools/snippets-mastery/" target="_blank"> Snippets Mastery</a>. Later I wanted to combine the ability to practice typing code with the programming guides so I revamped it into a tool called <a href="https://wengindustry.com/tools/retype-notes/" target="_blank"> Retype Notes</a>. However, as Obsidian MD is part of the open source community, I've switched over to their software and I want to see if I can make a vault of programming languages and concepts. I plan to publish Quick Start articles for different languages and technologies in the future. See my <a href="https://www.youtube.com/channel/UCg1O9uttSv3ZBzd1iep25Ig" target="_blank"><i class="fab fa-youtube" style={{color: "rgba(255,0,0,.75)"}}></i> tutorial videos</a>. This portfolio was created using an innovative combination of ReactJS and htaccess so that there may be React routes in a single page application but you can visit a route's URL directly in the address bar.</p>
                                    
                                <p>In the future I'd like to take a more entrepreneurship role leveraging my technical knowledge to make software for hospitals and clinics. I saw a need for charting software made by healthcare professionals (I continue to work as registered nurse in ICU a few times a month with a staffing agency so I can keep up to date in that industry). In order to learn more entrepreneurship and managing, I completed a <b>Project Management</b> certificate at UC Berkeley on December 2022. My motto is to always grow your craft.</p>

                                {/* Contributions */}

                                {/* 
                                    Go to profile page: https://github.com/Siphon880gh
                                        - Open up inspect to:
                                        - Remove "Contribution settings..." top right of the chart
                                        - Remove "Learn how we count contributions" under the chart
                                        - Remove bottom left and bottom right grids in the table
                                        - Zoom in until the chart (gray borders) is at least 1010px. Screen crop it. The React app will scale it back down to 1010px. 
                                */}


                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023}/>
                                    <img className="gh-contributions" src={githubContributions2023march}/>
                                </a>

                                <aside className="badges">

                                    <a className="badge-style-a" target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow">
                                        <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue"
                                        className="github-style badge-style" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue"/>
                                    </a>

                                    <a className="badge-style-a" target="_blank" href="https://github.com/Siphon880gh" rel="nofollow">
                                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" className="github-style badge-style" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
                                    </a>


                                    <a className="badge-style-a" target="_blank" href="//www.youtube.com/@WayneTeachesCode/" rel="nofollow">
                                        <img src="https://img.shields.io/badge/Youtube-red?style=flat&logo=youtube&labelColor=red"
                                        className="github-style badge-style" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red"/>
                                    </a>
                                    
                                </aside>

                                <aside className="info-spacer" style={{width:"1px", height:"10px"}}></aside>

                            </div>
                        </div>
            
                        </div>
                    </div>
        )
    }
}
