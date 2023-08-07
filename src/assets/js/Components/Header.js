
import React,{useState} from "react";
import ReactDOM from "react-dom";

import "./Header.css"

import Navigation from "./Navigation.js";
import LogoSquare from "../../img/logo-square.png"

export default function Header({fullPageMode}) {

    let [forceScrollbarByHeight, set_forceScrollbarByHeight]=useState(0);
    return (
            // <header data-component="Header" className="site-header">
            <header data-component="Header" className={"site-header " + (()=>fullPageMode?"full-page":"")()} style={forceScrollbarByHeight?{maxHeight:forceScrollbarByHeight}:{}}>

                <div className="page-title-wrapper">
                    <a className="logo-wrapper" href="./">
                        <img className="logo" src={LogoSquare} alt="Weng Industry Logo"/>
                    </a>
                    <div className="taglines" onClick={()=>{window.location.href='./'}} style={{cursor:"pointer"}}>
                        <div className="tagline-a">Weng Industry</div>
                        <div className="tagline-b"><span className="tagphrase-a">Realize Your</span> <span className="tagphrase-b">Tech Vision</span></div>
                    </div>
                </div>

                <Navigation set_forceScrollbarByHeight={set_forceScrollbarByHeight}></Navigation>

            </header>
    )
}