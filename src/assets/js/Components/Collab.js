import React from "react";
import ReactDOM from "react-dom";
import Project from "./Project.js";

export default class Collab extends React.Component {
    render() {
        const projects = [
            {    
                link: "https://reprint-media.herokuapp.com/",
                screenshot: "dist/assets/img/websites/reprint.gif",
                title: "NoFT (Not-NFT Reprints)",
                desc: "4/8/20 By Weng Fei Fung, Aidan Guarniere, Cassandra Hurlbut, and Jonathan Wilferd. NoFT is an environment where users can share, favorite, download, and discuss all of their favorite NFT works without actually interacting with any real non-fungible tokens. No changes to the chain-of-title, no interaction with cryptocurrency wallets, no financial transactions of any kind.",
                tech: "GraphQL, Apollo, Node, CSS3, Bootstrap, React Bootstrap",
                repos: "https://github.com/Siphon880gh/reprint/"
            },
            {
                link: "https://github.com/Siphon880gh/goals-social",
                screenshot: "dist/assets/img/websites/goals-social.gif",
                title: "Goals Social",
                desc: "2/10/21 By Weng Fei Fung, Aidan Meyer, and Angela Kao. A social network based around people’s goals. Look into their milestones, leave helpful comments, and chat with like-minded driven users",
                tech: "MongoDB, Mongoose, Express routes, Handlebars",
                repos: "https://github.com/Siphon880gh/goals-social",
                bgColor: "blue"
            },{
                link: "https://siphon880gh.github.io/your-daily-portal-adaigo-element",
                screenshot: "dist/assets/img/websites/your-daily-portal.gif",
                title: "Your Daily Portal",
                desc: "11/24/20 By Weng Fei Fung, Stephanie Freyler, and Robert Campagna. Homepage customized by you, for you. With daily horoscopes and music playlists.",
                tech: "Shopify API, Particle JS, Materialize CSS",
                repos: "https://github.com/Siphon880gh/your-daily-portal-adaigo-element"
            }

        ]

        return (

                <div data-component="collab" id="collab" className="collab section">
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
                                    >
                                    </Project>
                                )
                            })}

                    </div>
                </div>
        )
    }
}