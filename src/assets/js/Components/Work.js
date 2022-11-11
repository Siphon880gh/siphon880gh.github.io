
import React from "react";
import ReactDOM from "react-dom";

import Project from "./Project.js";

export default class Work extends React.Component {

    render() {

        const projects = [{
                link: "https://wengindustry.com/tools/covid19/",
                screenshot: "dist/assets/img/websites/covid.png",
                title: "Covid 19 Tracker",
                tech: "jQuery, PHP, Node, Chart JS, Cronjobs, cURL, phpQuery, and scraping",
                desc: "By Weng Fei Fung. Simple Covid-19 Tracker for the Los Angeles metropolitan area and other interest areas.",
            },{
                link: "https://wengindustry.com/tools/run-app/",
                screenshot: "dist/assets/img/websites/run.png",
                title: "Run App",
                tech: "jQuery, Bootstrap, PWA",
                desc: ["By Weng Fei Fung. After trying run club with a friend, I realized how out of shape I was, so I made an app as soon as possible to train myself to run for prolonged periods. It took less than 3 hours to code and I had an app I could use. I'm now using the app to condition my running every week and improving its useability over time."],
                // desc: ["Featured on ", <a href='https://exrx.net/Links' target='_blank'>ExRx</a>,<p/>,"By Weng Fei Fung. After trying run club with a friend, I realized how out of shape I was, so I made an app as soon as possible to train myself to run for prolonged periods. It took less than 3 hours to code and I had an app I could use. I'm now using the app to condition my running every week and improving its useability over time."],
                repos: "https://github.com/Siphon880gh/run-app/"
            },
            {

                link: "https://siphon880gh.github.io/weather-dashboard/",
                screenshot: "dist/assets/img/websites/weather-dashboard.png",
                title: "Weather Dashboard",
                desc: "By Weng Fei Fung. Weather forecast. Shows today's weather forecast as well as the next five days. Make it your homepage to stay up to date on the weather! Or use it to plan your trips.",
                tech: "JS, Bootstrap, Font-Awesome, OpenWeather API, Google Places API, LocalStorage",
                repos: "https://github.com/Siphon880gh/weather-dashboard"
            },
            {


                link: "https://budget-tracker-wff.herokuapp.com/",
                screenshot: "dist/assets/img/websites/budget-tracker.png",
                title: "Budget Tracker",
                desc: "By Weng Fei Fung. Budget Tracker is an offline capable PWA that lets you record your expenses and deposits so you can track your budget anywhere you are. Even if you are traveling to a remote area where internet is spotty, the app remembers your offline changes.",
                tech: "Express Routes, MongoDB, Mongoose ODM, IndexedDB, Service Worker, Cache, PWA",
                repos: "https://github.com/Siphon880gh/budget-tracker"

            },
            {

                link: "https://www.youtube.com/watch?v=s-0sNWgcSIQ/",
                screenshot: "dist/assets/img/websites/backend-ecommerce.png",
                title: "ECommerce Backend",
                desc: "By Weng Fei Fung. Backend for Ecommerce websites. Information are categories, products, and tags.",
                tech: "MySQL, Sequelize ORM",
                repos: "https://github.com/Siphon880gh/backend-ecommerce"
            },
            {
                link: "https://github.com/Siphon880gh/team-members-generator/",
                screenshot: "dist/assets/img/websites/team-members-generator.png",
                title: "Team Members HTML Generator",
                desc: "By Weng Fei Fung. Generate a web-page of your development team's members from a CLI tool.",
                tech: "OOP, Inquirer",
                repos: "https://github.com/Siphon880gh/team-members-generator"

            },
            {

                link: "https://siphon880gh.github.io/work-day-scheduler/",
                screenshot: "dist/assets/img/websites/work-day-scheduler.png",
                title: "Work Day Scheduler",
                desc: "By Weng Fei Fung. Schedule your work day on a convenient single page app. It'll break down the day into work hours which are color-coded to indicate past, present, or future. The events will load back up the next time you open the app.",
                tech: "Moment JS, jQuery",
                repos: "https://github.com/Siphon880gh/work-day-scheduler"

            },
            {
                link: "https://americasfavors.com",
                screenshot: "dist/assets/img/websites/amfavs.png",
                title: "Americas Favors",
                desc: "Adjusted layout on BigCommerce platform using their Liquid templating language. Added interactivity and calculations using javascript.",
                tech: "BigCommerce CMS, templating, CSS"
            },
            {
                link: "https://web.archive.org/web/20200723024427/https://amaioofficial.com/",
                screenshot: "dist/assets/img/websites/amaio.png",
                title: "Amaio Swimwear",
                desc: "Worked with blueprints provided by the designer Natalie T. to create different template pages on the Shopify platform.",
                tech: "Shopify CMS, Liquid templating, CSS"
            },
            {

                link: "https://exrx.net/Store/Other/Licensing",
                screenshot: "dist/assets/img/websites/exrx.png",
                title: "ExRx.net Exercise API",
                desc: "Created an API that provides exercise information to other companies' workout apps.",
                tech: "MySQL, PHP, Rest API, jQuery, jQuery UI, Bootstrap"

            },
            {


                link: "https://wengindustry.com/tools/sp/medit/",
                screenshot: "dist/assets/img/websites/medit.png",
                title: "Create Your Own Meditation",
                desc: "Made by Weng. Create your own audio meditation track. Type sentences into a timeline and have the app read them.",
                tech: "jQuery, Text-to-Speech"
            },
            {

                link: "https://wengindustry.com/tools/sp/Bible",
                screenshot: "dist/assets/img/websites/Bible.png",
                title: "Bible",
                desc: "Made by Weng. Bible app.",
                tech: "jQuery, Text-to-Speech"

            },
            {
                link: "https://wengindustry.com/tools/multitimers/",
                screenshot: "dist/assets/img/websites/multitimers.png",
                title: "Multitimers",
                desc: "Made by Weng. Create multiple timers",
                tech: "jQuery"
            },
            {

                link: "https://wengindustry.com/demo/retype-notes/",
                screenshot: "dist/assets/img/websites/retype-notes.png",
                title: "Retype and Rearrange Notes",
                desc: "Made by Weng. Learn any programming language by retyping and rearranging lines of code.",
                tech: "jQuery, PHP"
            }
        ]
        return (

            <div data-component="work" id="work" className="work section mx-2">
                <div className="row">

                    {projects.map(project=>{
                            let {link="",screenshot="",title="",desc="", tech="", repos="", bgColor=""} = project;
                            return (
                                <Project
                                    link={link}
                                    screenshot={screenshot}
                                    title={title}
                                    desc={desc}
                                    repos={repos}
                                    bgColor={bgColor}
                                    tech={tech}
                                >
                                </Project>
                            )
                        })}

                </div>
            </div>
        )
    } // render
}