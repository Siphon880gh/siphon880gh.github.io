// import Project

class Work extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main data-component="work" id="work" className="work section">
                    <h2 className="section-title">Work</h2>
                    <div className="grid-wrapper">
                        <div className="grid">

                            <Project    
                                link="https://wengindustry.com/tools/covid19/"
                                screenshot="assets/img/websites/covid.png"
                                title="Covid 19 Tracker"
                                desc="Made by Weng. Simple Covid-19 Tracker for the Los Angeles metropolitan area and other interest areas. A combination of jQuery, PHP, cronjobs, and scraping.">
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