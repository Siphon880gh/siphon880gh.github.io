
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import githubContributions2023 from "../../img/github-contributions-2022.png"
import githubContributions2023march from "../../img/github-contributions-2023-03.png"
import mePic from "../../img/me3.jpg"
import ytCover from "../../img/yt-cover.png"
import "./WhoAmI.css"
import { Carousel } from 'react-bootstrap';

class LangIcon extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const { techName, text, iconClassName, globalTechName, techColorOn, techColorOff, toggleTechName } = this.props;
        console.log(this.props)

        return (
            <div className={iconClassName} data-tech={techName} data-is-colored={globalTechName === techName && techName} onClick={toggleTechName} onMouseEnter={techColorOn} onMouseOut={techColorOff} style={{ display: "inline-block" }}> {text}
            </div>
        )
    }
} // LangIcon

const videos = [
    {
        id: 1,
        title: 'Demo: Ecommerce Backend',
        thumbnail: 'https://i9.ytimg.com/vi_webp/s-0sNWgcSIQ/mqdefault.webp?v=600adee1&sqp=CNjypaYG&rs=AOn4CLAzMCVJ-mrIB0lU3_BiL8S-WveGuA',
        url: 'https://www.youtube.com/watch?v=s-0sNWgcSIQ'
    },
    {
        id: 2,
        title: 'Code Organization - Publisher/Subscriber, Service Layer, Data Access Layer',
        thumbnail: 'https://i9.ytimg.com/vi_webp/eNh6t2_tuAI/mq1.webp?sqp=CLD3paYG&rs=AOn4CLDfYEpP5J445JqMi47EWjB--ubLYg',
        url: 'https://www.youtube.com/watch?v=eNh6t2_tuAI'
    },
    // more videos...
]

function VideoGallery() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="carousel-wrapper">
            <header className="yt-gallery-header"
                style={{

                    backgroundImage: `url(${ytCover})`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'darken',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                <h3 className="blur-gradient">
                    <a href="//www.youtube.com/@WayneTeachesCode" target="_blank">
                        <i class="fab fa-youtube">&nbsp;</i>My Tutorials
                    </a>
                </h3>
            </header>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {videos.map(video => (
                    <Carousel.Item key={video.id}>
                        <img
                            className="d-block"
                            src={video.thumbnail}
                            alt={video.title}
                            style={{
                                width: "50% !important",
                                margin: "0 auto"
                            }}
                        />
                        <Carousel.Caption>
                            <h3>{video.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            techName: ""
        }
    }
    componentDidMount() {
        document.querySelectorAll(".wbr-slash").forEach(node => {
            node.innerHTML = node.innerHTML.replaceAll("/", "/<wbr>")
        });
    }

    techColorOn = (event) => {
        event.stopPropagation();
        console.log(event.target);

        let techName = event.target?.getAttribute("data-tech");

        // Make sure it's the container
        if (!techName) techName = event.target.parent?.getAttribute("data-tech")

        console.log(`Tech name ${techName}`);
        this.setState({
            techName
        })
    }

    techColorOff = (event) => {
        event.stopPropagation();
        this.setState({
            techName: ""
        })
    }
    toggleTechName = (event) => {
        event.stopPropagation();

        const techName = event.target.getAttribute("data-tech");
        this.setState({
            techName: this.state.techName.length ? "" : techName
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

                <div className="wrapper max-width">

                    <div className="sides mt-2">

                        <div className="side-a">&nbsp;</div>
                        <div className="side-b">&nbsp;</div>
                        <div className="side-c">
                            <img className="hidden-950px-up me" src={mePic} alt="Picture of me"></img>

                            <VideoGallery></VideoGallery>


                            {/* <p><i>Cut to the chase? See 📂 <a href="./?page=work">my work</a>.</i></p> */}
                            {/* <p><i>Cut to the chase? See 📂 <Link to="work">my work</Link>.</i></p> */}

                            <main class="main-content">

                            <header className="header">
                                <h2 id="about-anchor" className="f1a">
                                    <span>Full Stack Web Developer</span>
                                </h2>
                            </header>
                            <section className="body">
                                <div className="author">Weng Fei Fung</div>

                                <h3>Introduction</h3>
                                <p>I'm a full-stack developer with several years of freelancing and teaching, specializing in
                                    <LangIcon iconClassName="devicon-react-original" techName="React" text="React" globalTechName={this.state.techName} {...otherProps}></LangIcon>, 
                                    <LangIcon iconClassName="devicon-express-original" techName="Express" text="Express" globalTechName={this.state.techName} {...otherProps}></LangIcon>, 
                                    <LangIcon iconClassName="devicon-javascript-plain" techName="Javascript" text="Javascript" globalTechName={this.state.techName} {...otherProps}></LangIcon>,
                                    <LangIcon iconClassName="devicon-jquery-plain" techName="jQuery" text="jQuery" globalTechName={this.state.techName} {...otherProps}></LangIcon>,
                                    with databases 
                                    <LangIcon iconClassName="devicon-mongodb-plain" techName="Mongo" text="Mongo" globalTechName={this.state.techName}  {...otherProps}></LangIcon> and 
                                    <LangIcon iconClassName="devicon-mysql-plain" techName="MySQL" text="MySQL" globalTechName={this.state.techName} {...otherProps}></LangIcon>,
                                    and with backend technologies
                                    <LangIcon iconClassName="devicon-php-plain" techName="PHP" text="PHP" globalTechName={this.state.techName} {...otherProps}></LangIcon> and
                                    <LangIcon iconClassName="devicon-nodejs-plain" techName="NodeJS" text="NodeJS" globalTechName={this.state.techName} {...otherProps}></LangIcon>.
                                    I've worked with startups and companies such as Mixotype, ExRx and People's Care, and am consulted for innovative problem-solving. My strengths include Javascript, React, jQuery, PHP, MySQL, Express JS, and Node. See <a target="_blank" href="./?page=testimonials">📍client testimonials</a>.</p>

                                <h3>Innovation</h3>
                                <p>Familiarity with multiple coding languages helps me provide unique business and tech solutions.</p>
                                <ul>
                                    <li>PHP and React: I have innovatively combined PHP and htaccess with React in my portfolio to streamline development. </li>
                                    <li>Cloud Solutions: I have used both AWS Services and Google Cloud. For <LangIcon iconClassName="devicon-googlecloud-plain" techName="GCloud" text="Google Cloud" globalTechName={this.state.techName} {...otherProps}></LangIcon>, I used Google Functions to integrate external API data into the Firebase when creating or updating into the database (a combination of NodeJS Google Cloud SDK and axios). For <LangIcon iconClassName="devicon-amazonwebservices-original" techName="AWS" text="AWS" globalTechName={this.state.techName} {...otherProps}></LangIcon>, I used S3 bucket with public read permissions on a React form (combination of AWS S3, Multer, React, Express).</li>
                                </ul>


                                <h3>Sharing my passion of programming</h3>
                                <p>I share my passion via bootcamps, youtube, and electronic publishing. I have a certificate for MERN web development at UCLA, having achieved  <Link to="achievements#top-marks">🌟 top marks</Link>. Before the bootcamp I freelanced with the Javascript-jQuery-PHP-MySQL tech stack which I self-learned. After certification, I've tutored EdX coding students on the MERN stack, Handlebars, jQuery, MySQL/Sequelize, GraphQL, and React State management (Context, Reducers, Redux, Redux Toolkit). I'm a senior tutor for coding bootcamps at universities nationwide and internationally via EdX. Check out <a target="_blank" href="./?page=students">👨🏻‍🏫 student reviews</a>. In addition to sharing my passion with future generations of programmers through bootcamps, I also made tutorials at <a href="https://www.youtube.com/@WayneTeachesCode" target="_blank"><i class="fab fa-youtube" style={{ color: "#FF0000" }}></i> @WayneTeachesCode</a>. See my <a href="https://wengindustry.com/tools/gamified-knowledge/" target="_blank">📄 coding snippets and guides</a> in a gamified knowledge app.</p>

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

                                <br />

                                <p></p>
                                <b><u>2023-Jan to 2023-Dec</u></b>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023march} />
                                </a>

                                <p></p>
                                <b><u>2022-Jan to 2022-Dec</u></b>
                                <a href="//github.com/Siphon880gh" target="_blank">
                                    <img className="gh-contributions" src={githubContributions2023} />
                                </a>


                                <aside className="badges">

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
