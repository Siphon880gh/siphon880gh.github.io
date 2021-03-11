
import React from "react";
import ReactDOM from "react-dom";

import Project from "./Project.js";

export default class Work extends React.Component {

    render() {

        const projects = [{
                link: "https://wengindustry.com/tools/covid19/",
                screenshot: "dist/assets/img/websites/covid.png",
                title: "Covid 19 Tracker",
                desc: "By Weng Fei Fung. Simple Covid-19 Tracker for the Los Angeles metropolitan area and other interest areas. A combination of jQuery, PHP, cronjobs, and scraping."
            },
            {

                link: "https://siphon880gh.github.io/weather-dashboard/",
                screenshot: "dist/assets/img/websites/weather-dashboard.png",
                title: "Weather Dashboard",
                desc: "By Weng Fei Fung. Weather forecast. Shows today's weather forecast as well as the next five days. Make it your homepage to stay up to date on the weather! Or use it to plan your trips.",
                repos: "https://github.com/Siphon880gh/weather-dashboard"
            },
            {


                link: "https://budget-tracker-wff.herokuapp.com/",
                screenshot: "dist/assets/img/websites/budget-tracker.png",
                title: "Budget Tracker",
                desc: "By Weng Fei Fung. Budget Tracker is an offline capable PWA that lets you record your expenses and deposits so you can track your budget anywhere you are. Even if you are traveling to a remote area where internet is spotty, the app remembers your offline changes.",
                repos: "https://github.com/Siphon880gh/budget-tracker"

            },
            {

                link: "https://www.youtube.com/watch?v=s-0sNWgcSIQ/",
                screenshot: "dist/assets/img/websites/backend-ecommerce.png",
                title: "ECommerce Backend",
                desc: "By Weng Fei Fung. Backend for Ecommerce websites. MySQL database with Sequelize ORM. Information are categories, products, and tags.",
                repos: "https://github.com/Siphon880gh/backend-ecommerce"
            },
            {



                link: "https://github.com/Siphon880gh/team-members-generator/",
                screenshot: "dist/assets/img/websites/team-members-generator.png",
                title: "Team Members HTML Generator",
                desc: "By Weng Fei Fung. Generate a web-page of your development team's members from a CLI tool.",
                repos: "https://github.com/Siphon880gh/team-members-generator"

            },
            {

                link: "https://siphon880gh.github.io/work-day-scheduler/",
                screenshot: "dist/assets/img/websites/work-day-scheduler.png",
                title: "Team Members HTML Generator",
                desc: "By Weng Fei Fung. Schedule your work day on a convenient single page app. It'll break down the day into work hours which are color-coded to indicate past, present, or future. The events will load back up the next time you open the app.",
                repos: "https://github.com/Siphon880gh/work-day-scheduler"

            },
            {


                link: "https://siphon880gh.github.io/js-quiz-game/",
                screenshot: "dist/assets/img/websites/code-quiz.png",
                title: "Team Members HTML Generator",
                desc: "By Weng Fei Fung. A quiz app that gives you a time limit based on how many questions there are. You get penalized 10 seconds everytime you answer wrong. It saves player names and scores.",
                repos: "https://github.com/Siphon880gh/js-quiz-game"
            },
            {


                link: "https://americasfavors.com",
                screenshot: "dist/assets/img/websites/amfavs.png",
                title: "Americas Favors",
                desc: "Adjusted layout on BigCommerce platform using their Liquid templating language. Added interactivity and calculations using javascript."
            },
            {

                link: "https://exrx.net/Store/Other/Licensing",
                screenshot: "dist/assets/img/websites/exrx.png",
                title: "ExRx.net Exercise API",
                desc: "Created an API that provides exercise information to other companies' workout apps."

            },
            {
                link: "https://amaioofficial.com/",
                screenshot: "dist/assets/img/websites/amaio.png",
                title: "Amaio Swimwear",
                desc: "Worked with blueprints provided by the designer Natalie T. to create different template pages on the Shopify platform."
            },
            {


                link: "https://wengindustry.com/tools/medit/",
                screenshot: "dist/assets/img/websites/medit.png",
                title: "Create Your Own Meditation",
                desc: "Made by Weng. Create your own audio meditation track. Type sentences into a timeline and have the app read them."
            },
            {

                link: "https://wengindustry.com/tools/Bible",
                screenshot: "dist/assets/img/websites/Bible.png",
                title: "Bible",
                desc: "Made by Weng. Bible app."

            },
            {

                link: "https://wengindustry.com/tools/multitimers/",
                screenshot: "dist/assets/img/websites/multitimers.png",
                title: "Multitimers",
                desc: "Made by Weng. Create multiple timers"
            },
            {

                link: "https://wengindustry.com/demo/retype-notes/",
                screenshot: "dist/assets/img/websites/retype-notes.png",
                title: "Retype and Rearrange Notes",
                desc: "Made by Weng. Learn any programming language by retyping and rearranging lines of code."
            }
        ]

        return (
                <main data-component="work" id="work" className="work section">
                    <div className="grid-wrapper">
                        <div className="grid max-width">

                            {projects.map(project=>{
                                let {link="",screenshot="",title="",desc="", repos="", bgColor=""} = project;
                                return (
                                    <Project
                                        link={link}
                                        screenshot={screenshot}
                                        title={title}
                                        desc={desc}
                                        repos={repos}
                                        bgColor={bgColor}
                                    >
                                    </Project>
                                )
                            })}

                        </div>
                    </div>
                </main>
        )
    }
}