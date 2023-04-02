
import React from "react";
import ReactDOM from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { 
    faAddressBook as meIcon, 
    faThumbsUp as clientTestimonialsIcon, 
    faStarHalfStroke as clientTestimonialsIconAlt,  
    faAddressCard as certificatesIcon, 
    faChessBishop as workIcon,  
} from '@fortawesome/free-solid-svg-icons'
import "./Navigation.css"

// Router
import {BrowserRouter} from "react-router-dom";
const Router = BrowserRouter;
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Prompt} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Redirect} from "react-router-dom";

export default function Navigation(props) {

    let {set_forceScrollbarByHeight} = props;

    function onClickMobileHamburgerIcon(event){
        
        // Force scrollbar on mobile menu if screen is too short vertically (CSS unable because is fixed)
        if(!document.querySelector(".site-nav").classList.contains("active")) {
            if(window.innerHeight<570) { // max-height of .site-header
                set_forceScrollbarByHeight(window.innerHeight);
            } else {
                set_forceScrollbarByHeight(0);
            }
        }
        document.querySelector(".site-nav").classList.toggle("active");
    }

    function collapseMobileMenu() {
        // console.log("collapseMobileMenu")
        document.querySelector(".site-nav").classList.remove("active");
    }


        return (
            <nav data-component="Navigation" className="site-nav">
            <span className="fa site-nav-mobile-btn" onClick={onClickMobileHamburgerIcon}></span>
            <div id="navs">
                <ul id="nav-primary">
                    <li>
                        <NavLink data-php-rerouter="whoami" to="./whoami" activeClassName="text-bold-colored" className="whoami" onClick={collapseMobileMenu}><FontAwesomeIcon icon={meIcon} /> ME</NavLink>
                    </li>
                    <li>
                        <NavLink data-php-rerouter="testimonials" to="./testimonials" activeClassName="text-bold-colored" onClick={collapseMobileMenu}><FontAwesomeIcon icon={clientTestimonialsIcon} /> CLIENT TESTIMONIALS</NavLink>
                    </li>
                    <li>
                        <NavLink data-php-rerouter="certs" to="./certs#a" activeClassName="text-bold-colored" onClick={collapseMobileMenu}><FontAwesomeIcon icon={certificatesIcon} /> CERTIFICATES</NavLink>
                    </li>                    
                    <li>
                        <NavLink data-php-rerouter="work" to="./work" activeClassName="text-bold-colored" onClick={collapseMobileMenu}><FontAwesomeIcon icon={workIcon} /> WORK</NavLink>
                    </li>
                    {/* <li>
                        <NavLink data-php-rerouter="contact" to="./contact" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Contact</NavLink>
                    </li> */}
                </ul><br style={{clear:"both"}}/>
                <ul id="nav-secondary">
                    {/* <li>
                        <NavLink data-php-rerouter="tech" to="./tech" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Tech</NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink data-php-rerouter="resume" to="./resume" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Resume</NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink data-php-rerouter="collab" to="./achievements" activeClassName="text-bold-colored">Achievements</NavLink>
                    </li>
                    <li>
                        <NavLink data-php-rerouter="collab" to="./collab" activeClassName="text-bold-colored">Certs</NavLink>
                    </li> */}

                    <li>
                        <NavLink data-php-rerouter="achievements" to="./achievements" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Achievements</NavLink>
                    </li>
                    <li>
                        <NavLink data-php-rerouter="credited" to="./credited" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Credited</NavLink>
                    </li>
                    <li>
                        <NavLink data-php-rerouter="students" to="./students" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Student Testimonials</NavLink>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.youtube.com/@WayneTeachesCode" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Tutorials</a>
                    </li>
                    <li>
                        <NavLink data-php-rerouter="collab" to="./collab" activeClassName="text-bold-colored" onClick={collapseMobileMenu}>Collab</NavLink>
                    </li>
                </ul>
                <div className="spacer-bottom-mobile"/>
            </div>
        </nav>
        );
}
