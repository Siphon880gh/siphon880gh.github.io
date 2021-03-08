// import Project

class Collab extends React.Component {
    render() {
        return (

            <React.Fragment>
                <div data-component="collab" id="collab" className="collab section">
                    <div className="collab-title-wrapper">
                        <h2 className="section-title">Collab </h2>
                        <img className="arrow-points" src="./assets/img/point-up.png" alt="Arrow points"/>
                    </div>
                    <div className="grid-wrapper">
                        <div className="grid">

                        <Project    
                                link="https://github.com/Siphon880gh/goals-social"
                                screenshot="assets/img/websites/goals-social.gif"
                                title="Goals Social"
                                desc="2/10/21 By Weng Fei Fung, Aidan Meyer, and Angela Kao. A social network based around people’s goals. Look into their milestones, leave helpful comments, and chat with like-minded driven users"
                                repos="https://github.com/Siphon880gh/goals-social">
                        </Project>

                        <Project    
                                link="https://siphon880gh.github.io/your-daily-portal-adaigo-element/"
                                screenshot="assets/img/websites/your-daily-portal.gif"
                                title="Your Daily Portal"
                                desc="11/24/20 By Weng Fei Fung, Stephanie Freyler, and Robert Campagna. Homepage customized by you, for you."
                                repos="https://github.com/Siphon880gh/goals-social">
                        </Project>

                        </div>
                    </div>
                </div>
            </React.Fragment>
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