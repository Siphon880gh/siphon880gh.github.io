// import Project

class Work extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main data-component="work" id="work" className="work section">
                    <div className="grid-wrapper">
                        <div className="grid max-width">

                            <Project    
                                link="https://wengindustry.com/tools/covid19/"
                                screenshot="assets/img/websites/covid.png"
                                title="Covid 19 Tracker"
                                desc="By Weng Fei Fung. Simple Covid-19 Tracker for the Los Angeles metropolitan area and other interest areas. A combination of jQuery, PHP, cronjobs, and scraping.">
                            </Project>

                            <Project    
                                link="https://siphon880gh.github.io/weather-dashboard/"
                                screenshot="assets/img/websites/weather-dashboard.png"
                                title="Weather Dashboard"
                                desc="By Weng Fei Fung. Weather forecast. Shows today's weather forecast as well as the next five days. Make it your homepage to stay up to date on the weather! Or use it to plan your trips."
                                repos="https://github.com/Siphon880gh/weather-dashboard">
                            </Project>

                            <Project    
                                link="https://budget-tracker-wff.herokuapp.com/"
                                screenshot="assets/img/websites/budget-tracker.png"
                                title="Budget Tracker"
                                desc="By Weng Fei Fung. Budget Tracker is an offline capable PWA that lets you record your expenses and deposits so you can track your budget anywhere you are. Even if you are traveling to a remote area where internet is spotty, the app remembers your offline changes."
                                repos="https://github.com/Siphon880gh/budget-tracker">
                            </Project>

                            <Project    
                                link="https://www.youtube.com/watch?v=s-0sNWgcSIQ/"
                                screenshot="assets/img/websites/backend-ecommerce.png"
                                title="ECommerce Backend"
                                desc="By Weng Fei Fung. Backend for Ecommerce websites. MySQL database with Sequelize ORM. Information are categories, products, and tags."
                                repos="https://github.com/Siphon880gh/backend-ecommerce">
                            </Project>
                            
                            
                            <Project    
                                link="https://github.com/Siphon880gh/team-members-generator/"
                                screenshot="assets/img/websites/team-members-generator.png"
                                title="Team Members HTML Generator"
                                desc="By Weng Fei Fung. Generate a web-page of your development team's members from a CLI tool."
                                repos="https://github.com/Siphon880gh/team-members-generator">
                            </Project>
                            
                            <Project    
                                link="https://siphon880gh.github.io/work-day-scheduler/"
                                screenshot="assets/img/websites/work-day-scheduler.png"
                                title="Team Members HTML Generator"
                                desc="By Weng Fei Fung. Schedule your work day on a convenient single page app. It'll break down the day into work hours which are color-coded to indicate past, present, or future. The events will load back up the next time you open the app."
                                repos="https://github.com/Siphon880gh/work-day-scheduler">
                            </Project>
                            
                            
                            <Project    
                                link="https://siphon880gh.github.io/js-quiz-game/"
                                screenshot="assets/img/websites/code-quiz.png"
                                title="Team Members HTML Generator"
                                desc="By Weng Fei Fung. A quiz app that gives you a time limit based on how many questions there are. You get penalized 10 seconds everytime you answer wrong. It saves player names and scores."
                                repos="https://github.com/Siphon880gh/js-quiz-game">
                            </Project>

                            <Project    
                                link="https://americasfavors.com"
                                screenshot="assets/img/websites/amfavs.png"
                                title="Americas Favors"
                                desc="Adjusted layout on BigCommerce platform using their Liquid templating language. Added interactivity and calculations using javascript.">
                            </Project>

                            <Project    
                                link="https://exrx.net/Store/Other/Licensing"
                                screenshot="assets/img/websites/exrx.png"
                                title="ExRx.net Exercise API"
                                desc="Created an API that provides exercise information to other companies' workout apps.">
                            </Project>


                            <Project    
                                link="https://amaioofficial.com/"
                                screenshot="assets/img/websites/amaio.png"
                                title="Amaio Swimwear"
                                desc="Worked with blueprints provided by the designer Natalie T. to create different template pages on the Shopify platform.">
                            </Project>

                            <Project    
                                link="https://wengindustry.com/tools/medit/"
                                screenshot="assets/img/websites/medit.png"
                                title="Create Your Own Meditation"
                                desc="Made by Weng. Create your own audio meditation track. Type sentences into a timeline and have the app read them.">
                            </Project>

                            <Project    
                                link="https://wengindustry.com/tools/Bible"
                                screenshot="assets/img/websites/Bible.png"
                                title="Bible"
                                desc="Made by Weng. Bible app.">
                            </Project>

                            <Project    
                                link="https://wengindustry.com/tools/multitimers/"
                                screenshot="assets/img/websites/multitimers.png"
                                title="Multitimers"
                                desc="Made by Weng. Create multiple timers">
                            </Project>
                            
                            <Project    
                                link="https://wengindustry.com/demo/retype-notes/"
                                screenshot="assets/img/websites/retype-notes.png"
                                title="Retype and Rearrange Notes"
                                desc="Made by Weng. Learn any programming language by retyping and rearranging lines of code.">
                            </Project>

                        </div>
                    </div>
                </main>
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