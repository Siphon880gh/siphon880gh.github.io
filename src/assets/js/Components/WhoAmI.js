
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link, NavLink} from "react-router-dom";
import githubContributions2023 from "../../img/github-contributions-2022.png"
import githubContributions2023march from "../../img/github-contributions-2023-03.png"
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
                                <img className="hidden-950px-up me" src="https://wengindustry.com/me/src/assets/img/me2.jpg" alt="Picture of me"></img>
                                <h2 id="about-anchor" className="f1a">Full Stack Developer<br/><address className="author">Weng Fei Fung</address></h2>

                                <p><i>Cut to the chase? See my 📂 <a href="./?page=work">work</a>.</i></p>
                                
                                <p>Full stack developer with 7 years of freelancing {/* Linkedin -> Experience -> People's Care Jan 2016 - atm Jan 2023 */} <b className='wbr-slash'>Javascript/jQuery/Handlebars/PHP/MySQL</b>. Have worked with startups including Mixotype, and companies like ExRx and People's Care. Known as an innovative problem solver, developer friends go to me when they are stuck or have startup ideas. My strong points are jQuery, PHP, MySQL, React, Express JS, and Node. Please see <a target="_blank" href="./?page=testimonials">testimonials</a>.</p>

                                <p>Tutored students for 2 years {/* March 2021 - atm March 2023 */} on the <b>MERN stack + MySQL/Sequelize + GraphQL</b> (MERN was MongoDB/Mongoose, Express, React, Node JS), currently the highest distinction as a Senior Tutor with edX Coding Bootcamps. I was MERN certified by UCLA extensions with top marks. I have excellant <a target="_blank" href="./?page=students">student testimonials and ratings</a>.</p>

                                <p>An example of <b>innovation</b> is this portfolio where I combined PHP and htaccess with React to speed up development and allow you to visit links directly to a part of the SPA. Since it's not a mix of API and HTML files, skipping Express JS server routes makes sense. By knowing multiple generations of coding languages (JS/jQuery/Handlebars/PHP/MySQL, MERN, and graphQL), I can offer innovative solutions to your unique business needs.</p>

                                <p>I also like <b>learning new technologies</b>, languages, and frameworks. Have recently developed a proof of concept of Flutter connecting to Firebase, and having Firebase add more data in the backend using Google Cloud Functions. I've also experimented with Jupyter Notebook to make requests for datasets. I am making guides while exploring those technologies (Flutter, Data Science, etc). I am saving them to Obsidian MD which is a notebook software that deals mostly with Markdown MD files. My initial attempt was using my <a href="https://wengindustry.com/tools/snippets-mastery/" target="_blank"> own tool I call Snippets Mastery</a>. Later I wanted to combine the ability to practice typing code with the programming guides so I revamped it into a tool called <a href="https://wengindustry.com/tools/retype-notes/" target="_blank"> Retype Notes</a>. However, as Obsidian MD is part of the open source community, I've switched over to their software and I want to see if I can make a vault of programming languages and concepts. I plan to publish Quick Start articles for different languages and technologies in the future. See my <a href="https://www.youtube.com/channel/UCg1O9uttSv3ZBzd1iep25Ig" target="_blank"><i class="fab fa-youtube"></i> tutorial videos</a>. This portfolio was created using an innovative combination of ReactJS and htaccess so that there may be React routes in a single page application but you can visit a route's URL directly in the address bar.</p>
                                    
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
                                    <img className="contributions" src={githubContributions2023}/>
                                    <img className="contributions" src={githubContributions2023march}/>
                                </a>

                                <aside className="badges">

                                    <a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://camo.githubusercontent.com/0f56393c2fe76a2cd803ead7e5508f916eb5f1e62358226112e98f7e933301d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d626c75653f7374796c653d666c6174266c6f676f3d6c696e6b6564696e266c6162656c436f6c6f723d626c7565"
                                            className="github-style badge-style" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue"/></a>

                                    <a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>


                                    <a target="_blank" href="https://www.youtube.com/user/Siphon880yt/" rel="nofollow">
                                        <img src="https://camo.githubusercontent.com/0bf5ba8ac9f286f95b2a2e86aee46371e0ac03d38b64ee2b78b9b1490df38458/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f596f75747562652d7265643f7374796c653d666c6174266c6f676f3d796f7574756265266c6162656c436f6c6f723d726564"
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
