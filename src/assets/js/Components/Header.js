
import React,{useState} from "react";
import ReactDOM from "react-dom";

import Navigation from "./Navigation.js";

export default function Header() {

    let [forceScrollbarByHeight, set_forceScrollbarByHeight]=useState(0);
    return (
            // <header data-component="Header" className="site-header">
            <header data-component="Header" className="site-header" style={forceScrollbarByHeight?{maxHeight:forceScrollbarByHeight}:{}}>

                <div className="page-title-wrapper">
                    <a href="./">
                        <h1 className="page-title">Weng Industry</h1>
                    </a>
                </div>

                <Navigation set_forceScrollbarByHeight={set_forceScrollbarByHeight}></Navigation>

                <span className="clear-fix"></span>

            </header>
    )
}