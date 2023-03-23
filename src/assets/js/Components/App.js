// Dependent modules
import Header from "./Header.js";
import Footer from "./Footer.js";
import FooterSpace from "./FooterSpace.js";

import Tech from "./Tech.v0.js";
import WhoAmI from "./WhoAmI.js";
import Resume from "./Resume.js";

import Work from "./Work.js";
import Collab from "./Collab.js";

import Credit from "./Credit.js";
import Contact from "./Contact.js";
import Testimonials from "./Testimonials.js";
import Students from "./Students.js";

import IframeAdapter from "./IframeAdapter.js";

// Router
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
const Router = BrowserRouter;
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Prompt } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class App extends React.Component {
        constructor() {
            super();
            this.state = {
                hashCompatible: "(#.*)?"
            }

        }
        
        render() {
            return (
                <Router>
                    <div data-component="App" className="container-fluid p-0">
                        <Header></Header>
    
                        <div class="body-fixed">
                            <Switch>
                                <Route path={`*/tech${this.state.hashCompatible}`} component={Tech}/>
                                <Route path={`*/whoami${this.state.hashCompatible}`} component={WhoAmI}/>
                                <Route path={`*/resume${this.state.hashCompatible}`} component={Resume}/>
                                <Route path={`*/work${this.state.hashCompatible}`} component={Work}/>
                                <Route path={`*/achievements${this.state.hashCompatible}`} render={() => <IframeAdapter url="php-faster-development/achievements/index.php"/>}/>
                                <Route path={`*/certs${this.state.hashCompatible}`} render={() => <IframeAdapter url="php-faster-development/certs/index.php"/>}/>
                                <Route path={`*/collab${this.state.hashCompatible}`} component={Collab}/>
                                <Route path={`*/credited${this.state.hashCompatible}`} component={Credit}/>
                                <Route path={`*/contact${this.state.hashCompatible}`} component={Contact}/>
                                <Route path={`*/testimonials${this.state.hashCompatible}`} component={Testimonials}/>
                                <Route path={`*/students${this.state.hashCompatible}`} component={Students}/>
                                <Route path={`/${this.state.hashCompatible}`} component={WhoAmI}/>
                            </Switch>
                        </div>
    
                        <FooterSpace></FooterSpace>
                        <Footer></Footer>
    
                    </div>
                </Router>)
            }
        }

        const reactRoot = document.querySelector('.react-root');
        ReactDOM.render( < App / > , reactRoot);