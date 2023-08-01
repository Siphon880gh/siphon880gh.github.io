
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
                <div data-component="WhoAmI" className="page-whoami">

                    <div className="wrapper max-width">
                   
                        <div className="sides mt-2">

                            <div className="side-a">&nbsp;</div>
                            <div className="side-b">&nbsp;</div>
                            <div className="side-c">
                                <img className="hidden-950px-up me" src={mePic} alt="Picture of me"></img>
                                <h2 id="about-anchor" className="f1a">Full Stack Developer<br/><address className="author">Weng Fei Fung</address></h2>

                                {/* <p><i>Cut to the chase? See 📂 <a href="./?page=work">my work</a>.</i></p> */}
                                {/* <p><i>Cut to the chase? See 📂 <Link to="work">my work</Link>.</i></p> */}
                                <br/>

                                <h3>Introduction</h3>
                                <p>I'm a full-stack developer with several years of freelancing and teaching, specializing in React, Express, Mongo and Javascript, jQuery, PHP, and MySQL. I've worked with startups and companies such as Mixotype, ExRx and People's Care, and am often consulted for innovative problem-solving. My strengths include Javascript, React, jQuery, PHP, MySQL, Express JS, and Node. See <a target="_blank" href="./?page=testimonials">📍client testimonials</a>.</p>

                                <h3>Innovation</h3>
                                <p>Familiarity with multiple coding languages helps me provide unique business and tech solutions.</p>
                                <ul>
                                    <li>PHP and React: I have innovatively combined PHP and htaccess with React in my portfolio to streamline development. </li>
                                    <li>Cloud Solutions: I have used both AWS Services and Google Cloud. For Google Cloud, I used Google Functions to integrate external API data into the Firebase when creating or updating into the database (a combination of NodeJS Google Cloud SDK and axios). For AWS, I used S3 bucket with public read permissions on a React form (combination of AWS S3, Multer, React, Express).</li>
                                </ul>

                                <h3>Sharing my passion of programming</h3>
                                <p>I share my passion via bootcamps, youtube, and electronic publishing. I have a certificate for MERN web development at UCLA, having achieved  <Link to="achievements#top-marks">🌟 top marks</Link>. Before the bootcamp I freelanced with the Javascript-jQuery-PHP-MySQL tech stack which I self-learned. After certification, I've tutored EdX coding students on the MERN stack, Handlebars, jQuery, MySQL/Sequelize, GraphQL, and React State management (Context, Reducers, Redux, Redux Toolkit). I'm a senior tutor for coding bootcamps at universities nationwide and internationally via EdX. Check out <a target="_blank" href="./?page=students">👨🏻‍🏫 student reviews</a>. In addition to sharing my passion with future generations of programmers through bootcamps, I also made tutorials at <a href="https://www.youtube.com/@WayneTeachesCode" target="_blank"><i class="fab fa-youtube" style={{color:"#FF0000"}}></i> @WayneTeachesCode</a>. See my <a href="https://wengindustry.com/tools/gamified-knowledge/" target="_blank">📄 coding snippets and guides</a> in a gamified knowledge app.</p>

                                <h3>Growth</h3>
                                <p>I aim to take an entrepreneurial role in the future, leveraging my technical knowledge for healthcare software which is my prior background. I stay updated in the healthcare industry by working as a registered nurse periodically at a staffing agency. For entrepreneurship and management, I broadened my skills by completing a Project Management course at UC Berkeley in December 2022. My mantra is continuous growth. At the moment I want to transition out of contracts and freelancing and move into a career pathway towards management.</p>

                                I code almost everyday contributing to the GitHub community:

                                {/* <h3>2021 Nov to 2022 Nov</h3>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023}/>
                                </a>

                                <h3>2022 March to 2023 March</h3>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023march}/>
                                </a> */}

                                <br/>

                                <p></p>
                                <b><u>2023-Jan to 2023-Dec</u></b>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023march}/>
                                </a>

                                <p></p>
                                <b><u>2022-Jan to 2022-Dec</u></b>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023}/>
                                </a>


                                <aside className="badges">

                                    <a className="badge-style-a" target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow">
                                        <img src="https://camo.githubusercontent.com/0f56393c2fe76a2cd803ead7e5508f916eb5f1e62358226112e98f7e933301d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d626c75653f7374796c653d666c6174266c6f676f3d6c696e6b6564696e266c6162656c436f6c6f723d626c7565"
                                        className="github-style badge-style" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue"/>
                                    </a>

                                    <a className="badge-style-a" target="_blank" href="https://github.com/Siphon880gh" rel="nofollow">
                                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" className="github-style badge-style" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
                                    </a>


                                    <a className="badge-style-a" target="_blank" href="//www.youtube.com/@WayneTeachesCode/" rel="nofollow">
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
