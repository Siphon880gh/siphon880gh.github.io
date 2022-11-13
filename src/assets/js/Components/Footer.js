
import React, {useState} from "react";
import ReactDOM from "react-dom";
import calloutBubble from "../../img/callout-yt.png"


const relativeParent = {
    position: "relative",
    overflow: "visible"
}

const absoluteChild = {
    position: "absolute",
    top: "-95px",
    right: "-180px",
    overflow: "visible",
    transition: "display 2s ease"
}

const calloutImage = {
    width: "200px",
    height: "100px"
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


export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstSeconds: true
        }
    }
    
    componentDidMount() {
        const timer = setTimeout(()=>{
            this.setState({firstSeconds:false})
        }, 5000);
        return timer;
    }
    render() {
        return (
            <footer data-component="Footer" id="footer" className="footer section container-fluid">
                <div className="noop">
                    <ul className="noop" style={this.state.firstSeconds?overflowVisible:overflowScroll}>
                        <li><a className="text-bold" href="//linkedin.com/in/weng-fung/" target="_blank"><i className='fa fa-briefcase'>&nbsp;</i>Hire Me!</a></li>
                        <li><a href="//github.com/Siphon880gh" target="_blank"><i className='fab fa-github'>&nbsp;</i>Github</a></li>
                        <li style={relativeParent}>
                            <a href="//www.youtube.com/channel/UCg1O9uttSv3ZBzd1iep25Ig" target="_blank"><i className='fab fa-youtube'>&nbsp;</i>Youtube</a>
                            {this.state.firstSeconds?(<img src={calloutBubble} style={Object.assign(absoluteChild, calloutImage)}></img>):""}
                        </li>
                        <li><a href="tel:3238427514" target="_blank"><i className='fa fa-phone'>&nbsp;</i>323-842-7514</a></li>
                        <li><a href="mailto:weffung@ucdavis.edu" target="_blank"><i className='fa fa-envelope'>&nbsp;</i>weffung@ucdavis.edu</a></li>
                        {/* <li><a href="//www.wengindustry.com" target="_blank">WengIndustry.com</a></li>*/}
                    </ul>
                </div>
            </footer>
        )
    }
}
