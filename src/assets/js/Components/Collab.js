import React from "react";
import ReactDOM from "react-dom";
import Project from "./Project.js";

export default class Collab extends React.Component {
    render() {
        const projects = [{
                link: "https://github.com/Siphon880gh/goals-social",
                screenshot: "dist/assets/img/websites/goals-social.gif",
                title: "Goals Social",
                desc: "2/10/21 By Weng Fei Fung, Aidan Meyer, and Angela Kao. A social network based around people’s goals. Look into their milestones, leave helpful comments, and chat with like-minded driven users",
                repos: "https://github.com/Siphon880gh/goals-social",
                bgColor: "blue"
            },{
                link: "https://siphon880gh.github.io/your-daily-portal-adaigo-element",
                screenshot: "dist/assets/img/websites/your-daily-portal.gif",
                title: "Your Daily Portal",
                desc: "11/24/20 By Weng Fei Fung, Stephanie Freyler, and Robert Campagna. Homepage customized by you, for you.",
                repos: "https://github.com/Siphon880gh/your-daily-portal-adaigo-element"
            }
        ]

        return (

                <div data-component="collab" id="collab" className="collab section">
                    <div className="grid-wrapper">
                        <div className="grid">

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
                </div>
        )
    }
}

/**
 * 
    Template:
                    <Project    
                        link=""
                        screenshot=""
                        title=""
                        desc="">
                    </Project>

 * 
 */