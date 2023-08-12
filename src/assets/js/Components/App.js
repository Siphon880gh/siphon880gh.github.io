// Dependent modules
import Header from "./Header.js";
import Footer from "./Footer.js";
import FooterSpace from "./FooterSpace.js";

import Tech from "./Tech.v0.js";
import Oldie from "./WhoAmI.v1.js";
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
                hashCompatible: "(#.*)?",
                fullPageMode: false
            }
            this.changeToPageMode = (willPageMode) => {
                if(willPageMode)
                    this.setState({
                        ...this.state,
                        fullPageMode:true
                    })
                else
                    this.setState({
                        ...this.state,
                        fullPageMode:false
                    })
            }

        }

        render() {
            return (
                <Router>
                    <div data-component="App" className="container-fluid p-0">
                        <Header fullPageMode={this.state.fullPageMode}></Header>
                        
                        <div className={"body-fixed " + (()=>this.state.fullPageMode?"full-page":"")()}>
                            <Switch>
                                <Route path={`*/tech${this.state.hashCompatible}`} component={Tech}/>
                                <Route path={`*/whoami${this.state.hashCompatible}`} component={WhoAmI}/>
                                <Route path={`*/resume${this.state.hashCompatible}`} component={Resume}/>
                                <Route path={`*/work${this.state.hashCompatible}`} component={Work}/>
                                <Route path={`*/achievements#top-marks`} render={() => <IframeAdapter url="php-react-mixin/achievements/index.php#top-marks"/>}/>
                                <Route path={`*/achievements`} render={() => <IframeAdapter url="php-react-mixin/achievements/index.php"/>}/>
                                <Route path={`*/certs${this.state.hashCompatible}`} render={() => <IframeAdapter url="php-react-mixin/certs/index.php"/>}/>
                                <Route path={`*/collab${this.state.hashCompatible}`} component={Collab}/>
                                <Route path={`*/credited${this.state.hashCompatible}`} component={Credit}/>
                                <Route path={`*/contact${this.state.hashCompatible}`} component={Contact}/>
                                <Route path={`*/testimonials${this.state.hashCompatible}`} render={(routeProps) => <Testimonials {...routeProps} changeToPageMode={this.changeToPageMode}/>}/>
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