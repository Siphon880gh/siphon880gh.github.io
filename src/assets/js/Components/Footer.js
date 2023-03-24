
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

const relativeParent = {
    position: "relative",
    overflow: "visible"
}

const absoluteChild = {
    position: "absolute",
    top: "-125px",
    left: "-190px",
    overflow: "visible"
}

const calloutImage = {
    width: "200px",
    height: "100px",
    maxHeight: "100px"
}


const uiStyles = {
    callout: {
        active: Object.assign({}, absoluteChild, calloutImage),
        inactive: Object.assign({}, Object.assign(absoluteChild, calloutImage), { opacity:0 }),
    },
    ytLink: {
        active: {color:"red"},
        inactive: {color:"white"}
    }
}

/**
 * overflow scroll that allows horizontal scrolling on the footer is conflicting with the child absolutely positioned in a relative parent. This conflict prevents the child from being visible when out of bound.
 * when the callout bubble disappears, allowe overflow scrolling again.
 */
const overflowVisible = {
    overflow: "visible"
}

const overflowScroll = {
    overflow: "scroll"
}


export default function Footer() {
    let [firstSeconds, setFirstSeconds] = useState(true)
    let [laterSeconds, setLaterSeconds] = useState(false)

    function handleScroll() {
        setFirstSeconds(false)
    }

    useEffect(()=>{
        window.document.querySelector(".body-fixed").addEventListener('click', handleScroll);
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            setLaterSeconds(true)
        }, 2000);
    }, firstSeconds)
    
    
        return (
            <footer data-component="Footer" id="footer" className="footer section container-fluid">
                <div className="noop">
                    {
                        firstSeconds?
                        (<div className="fadeAll" style={gradientBottom}></div>):
                        (<></>)
                    }
                    <ul className="noop" style={!laterSeconds?overflowVisible:overflowScroll}>
                    {/* <ul className="noop"> */}
                        <li><a href="//github.com/Siphon880gh" target="_blank"><i className='fab fa-github'>&nbsp;</i>Github</a></li>
                        <li><a className="text-bold" href="//linkedin.com/in/weng-fung/" target="_blank"><i className='fa fa-briefcase'>&nbsp;</i>LinkedIn</a></li>
                        <li style={relativeParent}>
                            <a href="//www.youtube.com/@WayneTeachesCode" target="_blank" className="fadeAll" style={
                                    firstSeconds?
                                    uiStyles.ytLink.active
                                    :
                                    uiStyles.ytLink.inactive
                                }
                            ><i className='fab fa-youtube'>&nbsp;</i>Youtube</a>
                            {
                                !laterSeconds?

                                (<img className="fadeAll" src={calloutBubble} style={
                                    firstSeconds?
                                    uiStyles.callout.active
                                    :
                                    uiStyles.callout.inactive
                                }></img>)
                                
                                :
                                
                                ""
                            }
                        </li>
                        <li><a href="tel:3238427514" target="_blank"><i className='fa fa-phone'>&nbsp;</i>323-842-7514</a></li>
                        <li><a href="mailto:weffung@ucdavis.edu" target="_blank"><i className='fa fa-envelope'>&nbsp;</i>weffung@ucdavis.edu</a></li>
                        {/* <li><a href="//www.wengindustry.com" target="_blank">WengIndustry.com</a></li>*/}
                    </ul>
                </div>
            </footer>
        )
} // Footer
