
import React from "react";
import ReactDOM from "react-dom";
import "./Work.css";

// Components
import Project from "./Project";

// Merge in older pages
import Collab from "./Collab"
import Credited from "./Credit"

export default class Work extends React.Component {

    render() {

        const projects = [
            {
                link: "https://app.videolistings.ai/",
                screenshot: "dist/assets/img/websites/videolistings.png",
                title: "VideoListings.AI",
                desc: "As Cofounder / Lead Developer: Convert your real estate propery listing into an engaging video for social media and your property listing",
                tech: "NodeJS, PHP, Python, Rest API, jQuery, jQuery UI, Alpine JS, Bootstrap, Tailwind",
                youtube: "https://videolistings.ai/wp-content/uploads/2024/02/Video-Listings-Ai-Intro-Video-2-02-2024-compressed.mp4"
            },
            {
                link: "https://exrx.net/Store/Other/Licensing",
                screenshot: "dist/assets/img/websites/exrx.png",
                title: "ExRx.net Exercise API",
                desc: "As Lead Developer: Created an API of he well known ExRx that provides exercise information to other companies' workout apps.",
                tech: "MySQL, PHP, Rest API, jQuery, jQuery UI, Bootstrap"
            },
            {
                link: "https://wengindustry.com/tools/covid19/",
                screenshot: "dist/assets/img/websites/covid.png",
                title: "Covid 19 Tracker",
                tech: "jQuery, PHP, Node, Chart JS, Cronjobs, cURL, phpQuery, and scraping",
                desc: "By Weng Fei Fung. Simple Covid-19 Tracker for the Los Angeles metropolitan area and other interest areas.",
                gitRepos: "https://github.com/Siphon880gh/covid19-tracker",
                gitCommits: "https://github.com/Siphon880gh/covid19-tracker/commits/main/"
            },
            {
                link: "https://wengindustry.com/app/devbrain/",
                screenshot: "dist/assets/img/websites/retype-notes.png",
                title: "Developer Brain",
                // desc: "Made by Weng. Learn any programming language by retyping and rearranging lines of code.",
                desc: "Made by Weng. All my programing notes (Over 1500!).",
                tech: "jQuery, PHP",
                gitRepos: "https://github.com/Siphon880gh/devbrain",
                gitCommits: "https://github.com/Siphon880gh/brain-notes"

            },
            {
                link: "https://therunner.app/",
                screenshot: "dist/assets/img/websites/run.png",
                title: "Run App",
                tech: "jQuery, Bootstrap, PWA",
                // desc: ["By Weng Fei Fung. After trying run club with a friend, I realized how out of shape I was, so I made an app as soon as possible to train myself to run for prolonged periods. It took less than 3 hours to code and I had an app I could use. I'm now using the app to condition my running every week and improving its useability over time."],
                desc: ["Featured on <a style='color:white;' href='https://exrx.net/Notes/Links/Miscellaneous#Apps' target='_blank'>ExRx as Progressive Running</a>. By Weng Fei Fung. After trying run club with a friend, I realized how out of shape I was, so I made an app as soon as possible to train myself to run for prolonged periods. It took less than 3 hours to code and I had an app I could use. I'm now using the app to condition my running every week and improving its useability over time."],
                gitRepos: "https://github.com/Siphon880gh/run-app/",
                gitCommits: "https://github.com/Siphon880gh/run-app/commits/main/"
            },

            {

                link: "https://wengindustry.com/tools/sp/Bible",
                screenshot: "dist/assets/img/websites/Bible.png",
                title: "Bible",
                desc: "Made by Weng. Bible app.",
                tech: "jQuery, Text-to-Speech",
                infoNotLocalGitAndNoRemoteGit: 1

            },
            {
                link: "https://wengindustries.com/app/budget-tracker/",
                screenshot: "dist/assets/img/websites/budget-tracker.png",
                title: "Budget Tracker",
                desc: "By Weng Fei Fung. Budget Tracker is an offline capable PWA that lets you record your expenses and deposits so you can track your budget anywhere you are. Even if you are traveling to a remote area where internet is spotty, the app remembers your offline changes.",
                tech: "Express Routes, MongoDB, Mongoose ODM, IndexedDB, Service Worker, Cache, PWA",
                gitRepos: "https://github.com/Siphon880gh/budget-tracker",
                gitCommits: "https://github.com/Siphon880gh/budget-tracker/commits/master/"

            },
            {

                link: "https://www.youtube.com/watch?v=s-0sNWgcSIQ/",
                screenshot: "dist/assets/img/websites/backend-ecommerce.png",
                title: "ECommerce Backend",
                desc: "By Weng Fei Fung. Backend for Ecommerce websites. Information are categories, products, and tags.",
                tech: "MySQL, Sequelize ORM",
                gitRepos: "https://github.com/Siphon880gh/backend-ecommerce",
                gitCommits: "https://github.com/Siphon880gh/backend-ecommerce/commits/master/"
            },
            {
                link: "https://wengindustry.com/tools/sp/medit/",
                screenshot: "dist/assets/img/websites/medit.png",
                title: "Meditation - Create Your Own Meditation Tracks",
                desc: "Made by Weng. Create your own audio meditation track. Type sentences into a timeline and have the app read them.",
                tech: "jQuery, Text-to-Speech",
                infoNotLocalGitAndNoRemoteGit: 1
            },
            {
                link: "https://wengindustry.com/tools/multitimers/",
                screenshot: "dist/assets/img/websites/multitimers.png",
                title: "Multitimers",
                desc: "Made by Weng. Create multiple timers",
                tech: "jQuery",
                gitRepos: "https://github.com/Siphon880gh/multitimers",
                gitCommits: "https://github.com/Siphon880gh/multitimers/commits/master/"
            },
            {
                link: "https://github.com/Siphon880gh/team-members-generator/",
                screenshot: "dist/assets/img/websites/team-members-generator.png",
                title: "Team Members HTML Generator",
                desc: "By Weng Fei Fung. Generate a web-page of your development team's members from a CLI tool.",
                tech: "OOP, Inquirer",
                gitRepos: "https://github.com/Siphon880gh/team-members-generator",
                gitCommits: "https://github.com/Siphon880gh/team-members-generator/commits/master/",

            },
            {
                link: "https://siphon880gh.github.io/weather-dashboard/",
                screenshot: "dist/assets/img/websites/weather-dashboard.png",
                title: "Weather Dashboard",
                desc: "By Weng Fei Fung. If you travel frequently, it shows weather for the next 5 days, and it remembers what city you searched so you can easily search if you go back.",
                // desc: "By Weng Fei Fung. Weather forecast. Shows today's weather forecast as well as the next five days. Make it your homepage to stay up to date on the weather! Or use it to plan your trips.",
                tech: "JS, Bootstrap, Font-Awesome, OpenWeather API, Google Places API, LocalStorage",
                gitRepos: "https://github.com/Siphon880gh/weather-dashboard",
                gitCommits: "https://github.com/Siphon880gh/weather-dashboard/commits/master/"
            },
            {

                link: "https://siphon880gh.github.io/work-day-scheduler/",
                screenshot: "dist/assets/img/websites/work-day-scheduler.png",
                title: "Work Day Scheduler",
                desc: "By Weng Fei Fung. Schedule your work day on a convenient single page app. It'll break down the day into work hours which are color-coded to indicate past, present, or future. The events will load back up the next time you open the app.",
                tech: "Moment JS, jQuery",
                gitRepos: "https://github.com/Siphon880gh/work-day-scheduler",
                gitCommits: "https://github.com/Siphon880gh/work-day-scheduler/commits/master/"

            },
        ]

        return (
        <>
            <div data-component="work" id="work" className="work section mx-2">
                <h2>Work</h2>
                <div className="row">

                    {projects.map((project,i)=>{
                        let {link="",screenshot="",title="",desc="", tech="", gitRepos="", gitCommits="", youtube="", bgColor=""} = project;
                            return (
                                <Project
                                    key={"work-"+i}
                                    link={link}
                                    screenshot={screenshot}
                                    title={title}
                                    desc={desc}
                                    repos={gitRepos}
                                    bgColor={bgColor}
                                    tech={tech}
                                >
                                </Project>
                            )
                        })}

                </div>
            </div>

            
            <div id="link-other-work">
                <p>See more work at: <a target="_blank" href="https://www.wengindustry.com/me2">my other website</a></p>
            </div>

            <h2>Contributions / Group Work</h2>
            <Collab/>

            <h2>Credited</h2>
            <Credited/>
        </>
        )
    } // render
}