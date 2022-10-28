
import React from "react";
import ReactDOM from "react-dom";


// Router
import {BrowserRouter} from "react-router-dom";
const Router = BrowserRouter;
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Prompt} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Redirect} from "react-router-dom";

export default class Navigation extends React.Component {
    constructor(props) {
      super(props);
    }

    onClickMobileHamburgerIcon(event){
        let icon = event.target;
        icon.classList.toggle("active");
    }

    collapseMobileMenu() {
        let hamburgerIcon = document.querySelector(".site-nav-mobile-btn");
        hamburgerIcon.classList.remove("active");
    }

    componentDidMount() {
        // console.log("Component did mount");
        document.querySelector("a.whoami").click();
    }
    
    render(props) {
        return (
            <nav data-component="Navigation" className="site-nav">
            <span className="fa fa-grip-lines site-nav-mobile-btn" onClick={this.onClickMobileHamburgerIcon}></span>
            <ul>
                {/* <li>
                    <NavLink data-php-rerouter="tech" to="./tech" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Tech</NavLink>
                </li> */}
                <li>
                    <NavLink data-php-rerouter="whoami" to="./whoami" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu} className="whoami">About Me</NavLink>
                </li>
                {/* <li>
                    <NavLink data-php-rerouter="resume" to="./resume" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Resume</NavLink>
                </li> */}
                <li>
                    <NavLink data-php-rerouter="work" to="./work" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Work</NavLink>
                </li>
                <li>
                    <NavLink data-php-rerouter="collab" to="./collab" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Collab</NavLink>
                </li>
                <li>
                    <NavLink data-php-rerouter="credited" to="./credited" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Credited</NavLink>
                </li>
                <li>
                    <NavLink data-php-rerouter="testimonials" to="./testimonials" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Testimonials</NavLink>
                </li>
                <li>
                    <NavLink data-php-rerouter="students" to="./students" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Student Testimonials</NavLink>
                </li>
                <li>
                    <NavLink data-php-rerouter="contact" to="./contact" activeClassName="text-bold-colored" onClick={this.collapseMobileMenu}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        )
    }
}
