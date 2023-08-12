
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import calloutBubble from "../../img/callout-yt-v3.png"
import "./Footer.css"

const gradientBottom = {
    width: "100vw",
    height: "100px",
    position: "absolute",
    top: "-100px",
    left: "0",
    backgroundRepeat: "repeat-x",
    backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)`,
    pointerEvents: "none",
    transform: "scaleY(-1)"
}


export default function Footer() {
    
    return (
        <footer data-component="Footer" id="footer" className="footer section container-fluid">
            <div className="noop">
                <ul className="noop" style={{overflow: "scroll"}}>
                {/* <ul className="noop"> */}
                    <li><a href="//github.com/Siphon880gh" target="_blank"><i className='fab fa-github'>&nbsp;</i>Github</a></li>
                    <li><a className="text-bold" href="//linkedin.com/in/weng-fung/" target="_blank"><i className='fa fa-briefcase'>&nbsp;</i>LinkedIn</a></li>
                    <li><a href="//www.youtube.com/@WayneTeachesCode" target="_blank"><i className='fab fa-youtube'>&nbsp;</i>Youtube</a></li>
                    <li><a href="tel:3238427514" target="_blank"><i className='fa fa-phone'>&nbsp;</i>323-842-7514</a></li>
                    <li><a href="mailto:weng.f.fung@gmail.com" target="_blank"><i className='fa fa-envelope'>&nbsp;</i>weng.f.fung@gmail.com</a></li>
                    {/* <li><a href="//www.wengindustry.com" target="_blank">WengIndustry.com</a></li>*/}
                </ul>
            </div>
        </footer>
    )
} // Footer
