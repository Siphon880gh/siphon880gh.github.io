
import React, { Component, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import githubContributions2023 from "../../img/github-contributions-2022.png"
import githubContributions2023march from "../../img/github-contributions-2023-03.png"
import mePic from "../../img/me3.jpg"
import ytHeaderCover from "../../img/yt-cover.png"
import "./WhoAmI.css"

import ytCodeOrganization from '../../img/yt-gallery/code-organization.png'
import ytEcommerceBackend from '../../img/yt-gallery/ecommerce-backend.png'
import ytReactProps from '../../img/yt-gallery/react-props.png'
import ytTrading from '../../img/yt-gallery/trading.png'
import ytDailyPortal from '../../img/yt-gallery/daily-portal.png'
import videosPreimport from "./VideoGallery.data.js";
const videos = videosPreimport({ytCodeOrganization, ytEcommerceBackend, ytReactProps, ytTrading, ytDailyPortal})
import VideoGallery from "./VideoGallery.comp";

import LangIcon from "./LangIcon.comp";
import iconChatGPT from '../../img/ChatGPT.png';


export default class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasScrolledDown: false,
            techName: ""
        }
        this.intersectionObserverRef = React.createRef();
    }
    componentDidMount() {
        document.querySelectorAll(".wbr-slash").forEach(node => {
            node.innerHTML = node.innerHTML.replaceAll("/", "/<wbr>")
        });

        // window.addEventListener("scroll", function() {
        //         console.log("scrolling down");
        // }, false);

        // Set up the Intersection Observer on the element
        this.observer = new IntersectionObserver(
            entries => {
            // The callback will return an array of entries, even if you are only observing a single element
            if (entries[0].isIntersecting) {
                this.userHasScrolledDown()
            } else {
                console.log('Element is not in the viewport.');
            }
            },
            {
            root: null, // default is the viewport
            rootMargin: '0px',
            threshold: 0.1  // 0.1 means that at least 10% of the target's visibility has crossed the threshold of being in viewport
            }
        );
    
        if (this.intersectionObserverRef.current) {
            this.observer.observe(this.intersectionObserverRef.current); // Start observing the ref
        }

    } // componentDidMount

    techColorOn = (event) => {
        event.stopPropagation();
        console.log(event.target);

        let techName = event.target?.getAttribute("data-tech");

        // Make sure it's the container
        if (!techName) techName = event.target.parent?.getAttribute("data-tech")
        console.log(`Tech name ${techName}`);

        this.setState({
            ...this.state,
            techName
        })
    }

    techColorOff = (event) => {
        event.stopPropagation();
        this.setState({
            ...this.state,
            techName: ""
        })
    }
    toggleTechName = (event) => {
        event.stopPropagation();

        const techName = event.target.getAttribute("data-tech");
        this.setState({
            ...this.state,
            techName: this.state.techName.length ? "" : techName
        })
    }

    userHasScrolledDown = () => {
        this.setState({
            ...this.state,
            hasScrolledDown: true
        })
    }


    render() {
        const otherProps = {
            techColorOn: this.techColorOn,
            techColorOff: this.techColorOff,
            toggleTechName: this.toggleTechName
        }


        return (
            <div data-component="WhoAmI" className="page-whoami">
                <div className="cue-scroll-down-wrapper" style={{display:!this.state.hasScrolledDown?"block":"none"}}>
                    <div>Scroll down</div>                
                    <div className="cue-scroll-down"></div>
                </div>
               

                <div className="wrapper max-width">

                    <div className="sides mt-2">

                        <div className="side-a">&nbsp;</div>
                        <div className="side-b">&nbsp;</div>
                        <div className="side-c">
                            <div className="hidden-950px-up-off me">
                                <img src={mePic} alt="Picture of me"></img>
                                <div style={{width:"100%"}}>
                                    <span className="pic-me-name">Weng Fei Fung</span>
                                    <span className="pic-me-title"> • Coding Bootcamp Senior Tutor • Freelancer</span>
                                </div>
                            </div>

                            <VideoGallery videos={videos} ytHeaderCover={ytHeaderCover}></VideoGallery>
                            <div ref={this.intersectionObserverRef} style={{width:"1px",height:"1px"}}></div>

                            {/* <p><i>Cut to the chase? See 📂 <a href="./?page=work">my work</a>.</i></p> */}
                            {/* <p><i>Cut to the chase? See 📂 <Link to="work">my work</Link>.</i></p> */}

                            <main class="main-content">

                            <header className="header">
                                <h2 id="about-anchor" className="f1a">
                                    <span>Full Stack Web Developer</span>
                                </h2>
                            </header>
                            <section className="body">
                                <div className="author">Hi, I'm Weng Fei Fung (Just call me Weng)</div>

                                <h3>Introduction</h3>
                                <p>I'm a full-stack developer with several years of freelancing and teaching, specializing in
                                    <LangIcon iconClassName="devicon-react-original" techName="React" text="React" globalTechName={this.state.techName} {...otherProps}/>, 
                                    <LangIcon iconClassName="devicon-express-original" techName="Express" text="Express" globalTechName={this.state.techName} {...otherProps}/>, 
                                    <LangIcon iconClassName="devicon-javascript-plain" techName="Javascript" text="Javascript" globalTechName={this.state.techName} {...otherProps}/>,
                                    <LangIcon iconClassName="devicon-jquery-plain" techName="jQuery" text="jQuery" globalTechName={this.state.techName} {...otherProps}/>,
                                    with databases 
                                    <LangIcon iconClassName="devicon-mongodb-plain" techName="Mongo" text="Mongo" globalTechName={this.state.techName}  {...otherProps}/> and 
                                    <LangIcon iconClassName="devicon-mysql-plain" techName="MySQL" text="MySQL" globalTechName={this.state.techName} {...otherProps}/>,
                                    and with backend technologies
                                    <LangIcon iconClassName="devicon-php-plain" techName="PHP" text="PHP" globalTechName={this.state.techName} {...otherProps}/> and
                                    <LangIcon iconClassName="devicon-nodejs-plain" techName="NodeJS" text="NodeJS" globalTechName={this.state.techName} {...otherProps}/>.
                                    I've worked with startups and companies such as Mixotype, ExRx and People's Care, and am consulted for innovative problem-solving. My strengths include Javascript, React, jQuery, PHP, MySQL, Express JS, and Node. See <a target="_blank" href="./?page=testimonials">📍client testimonials</a>.</p>

                                <h3>Innovation</h3>
                                <p>Familiarity with multiple coding languages helps me provide unique business and tech solutions.</p>
                                <ul>
                                    <li>PHP and React: I have innovatively combined PHP and htaccess with React in my portfolio to streamline development. </li>
                                    <li>Cloud Solutions: I have used both AWS Services and Google Cloud. For <LangIcon iconClassName="devicon-googlecloud-plain" techName="GCloud" text="Google Cloud" globalTechName={this.state.techName} {...otherProps}/>, I used Google Functions to integrate external API data into the Firebase when creating or updating into the database (a combination of NodeJS Google Cloud SDK and axios). For <LangIcon iconClassName="devicon-amazonwebservices-original" techName="AWS" text="AWS" globalTechName={this.state.techName} {...otherProps}/>, I used S3 bucket with public read permissions on a React form for image uploading (combination of AWS S3, Multer, React, Express).</li>
                                </ul>


                                <h3>Sharing my passion of programming</h3>
                                <p>I share my passion via bootcamps, youtube, and electronic publishing. I have a certificate for MERN web development at UCLA, having achieved  <Link to="achievements#top-marks">🌟 top marks</Link>. Before the bootcamp I freelanced with the Javascript-jQuery-PHP-MySQL tech stack which I self-learned. After certification, I've tutored EdX coding students on the MERN stack, <LangIcon iconClassName="devicon-handlebars-plain" techName="Handlebars" text="Handlebars" globalTechName={this.state.techName} {...otherProps}/>, jQuery, MySQL/Sequelize, <LangIcon iconClassName="devicon-graphql-plain" techName="GraphQL" text="GraphQL" globalTechName={this.state.techName} {...otherProps}/>, and React State management (Context, Reducers, <LangIcon iconClassName="devicon-redux-plain" techName="Redux" text="Redux" globalTechName={this.state.techName} {...otherProps}/>, Redux Toolkit). I'm a senior tutor for coding bootcamps at universities nationwide and internationally via EdX. Check out <a href="./?page=students">👨🏻‍🏫 student reviews</a>. In addition to sharing my passion with future generations of programmers through bootcamps, I also made tutorials at <a href="https://www.youtube.com/@WayneTeachesCode" target="_blank"><i class="fab fa-youtube" style={{ color: "#FF0000" }}></i> @WayneTeachesCode</a>. See my <a href="https://wengindustry.com/tools/gamified-knowledge/" target="_blank">📄 coding snippets and guides</a> in a gamified knowledge app.</p>

                                <h3>Growth</h3>
                                <p>
                                In the future, I aim to take an entrepreneurial role developing innovative healthcare software solutions leveraging my technical knowledge and prior healthcare background. I stay updated in the healthcare industry which is why I continue working as a registered nurse periodically at a staffing agency on the weekends. For entrepreneurship and management, I broadened my skills by completing a Project Management course at UC Berkeley in December 2022. My mantra is continuous growth. At the moment I want to transition out of contracts and freelancing and move into a career pathway towards management.</p>

                                <p>In order to explore the cutting-edge and what opportunities are there in 2023, I took courses in 
                                <LangIcon iconClassName="devicon-python-plain" techName="Python" text="Python" globalTechName={this.state.techName} {...otherProps}/> and 
                                <LangIcon iconClassName={{importedIcon:iconChatGPT}} techName="AIPromptEngineering" text="Prompt Engineering" globalTechName={this.state.techName} {...otherProps}/>. {/*I have earned multiple <Link to="certs#a">certificates</Link> in python and prompt engineering.*/}</p>

                                <p>I code almost everyday contributing to the GitHub community:</p>

                                {/* <h3>2021 Nov to 2022 Nov</h3>
                                    <a href="//github.com/Siphon880gh" target="_blank">
                                        <img className="gh-contributions" src={githubContributions2023}/>
                                    </a>

                                    <h3>2022 March to 2023 March</h3>
                                    <a href="//github.com/Siphon880gh" target="_blank">
                                        <img className="gh-contributions" src={githubContributions2023march}/>
                                    </a> */}

                                <hr style={{margin:"30px auto"}}/>

                                <b style={{fontSize:"120%"}}><u>2023-Jan to 2023-Dec</u></b><br/>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023march} style={{marginLeft:"30px"}}/>
                                </a>

                                <p></p>
                                <b style={{fontSize:"120%"}}><u>2022-Jan to 2022-Dec</u></b><br/>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023} style={{marginLeft:"30px"}}/>
                                </a>


                                <aside className="badges mobile-invisible">

                                    <a className="badge-style-a" target="_blank" href="https://github.com/Siphon880gh" rel="nofollow">
                                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" className="github-style badge-style" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
                                    </a>

                                    <a className="badge-style-a" target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow">
                                        <img src="https://camo.githubusercontent.com/0f56393c2fe76a2cd803ead7e5508f916eb5f1e62358226112e98f7e933301d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d626c75653f7374796c653d666c6174266c6f676f3d6c696e6b6564696e266c6162656c436f6c6f723d626c7565"
                                            className="github-style badge-style" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue" />
                                    </a>

                                    <a className="badge-style-a" target="_blank" href="//www.youtube.com/@WayneTeachesCode/" rel="nofollow">
                                        <img src="https://camo.githubusercontent.com/0bf5ba8ac9f286f95b2a2e86aee46371e0ac03d38b64ee2b78b9b1490df38458/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f596f75747562652d7265643f7374796c653d666c6174266c6f676f3d796f7574756265266c6162656c436f6c6f723d726564"
                                            className="github-style badge-style" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red" />
                                    </a>

                                </aside>

                                <aside className="info-spacer" style={{ width: "1px", height: "10px" }}></aside>
                                
                            </section>

                            </main>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
