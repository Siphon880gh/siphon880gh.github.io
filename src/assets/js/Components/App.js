// Dependent modules
import Header from "./Header.js";
import Footer from "./Footer.js";
import FooterSpace from "./FooterSpace.js";

import Tech from "./Tech.js";
import WhoAmI from "./WhoAmI.js";
import Resume from "./Resume.js";

import Work from "./Work.js";
import Collab from "./Collab.js";

import Credit from "./Credit.js";
import Contact from "./Contact.js";

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
        render() {
            return (
                <Router>
                    <div data-component="App" className="container-fluid p-0">
                        <Header></Header>
    
                        <Switch>
                            <Route path="*/tech" component={Tech}/>
                            <Route path="*/whoami" component={WhoAmI}/>
                            <Route path="*/resume" component={Resume}/>
                            <Route path="*/work" component={Work}/>
                            <Route path="*/collab" component={Collab}/>
                            <Route path="*/credited" component={Credit}/>
                            <Route path="*/contact" component={Contact}/>
                            <Route path="*" component={WhoAmI}/>
                        </Switch>
    
                        <FooterSpace></FooterSpace>
                        <Footer></Footer>
    
                    </div>
                </Router>)
            }
        }

        const reactRoot = document.querySelector('.react-root');
        ReactDOM.render( < App / > , reactRoot);