
import React from "react";
import ReactDOM from "react-dom";

export default class Footer extends React.Component {
    render() {
        return (
            <footer data-component="Footer" id="footer" className="footer section container-fluid">
                <div className="noop">
                    <ul className="noop">
                        <li><a className="text-bold" href="//linkedin.com/in/weng-fung/" target="_blank"><i class='fa fa-briefcase'>&nbsp;</i>Hire Me!</a></li>
                        <li><a href="//github.com/Siphon880gh" target="_blank"><i class='fab fa-github'>&nbsp;</i>Github</a></li>
                        <li><a href="//www.youtube.com/channel/UCg1O9uttSv3ZBzd1iep25Ig" target="_blank"><i class='fab fa-youtube'>&nbsp;</i>Youtube</a></li>
                        <li><a href="tel:3238427514" target="_blank"><i class='fa fa-phone'>&nbsp;</i>323-842-7514</a></li>
                        <li><a href="mailto:weffung@ucdavis.edu" target="_blank"><i class='fa fa-envelope'>&nbsp;</i>weffung@ucdavis.edu</a></li>
                        {/* <li><a href="//www.wengindustry.com" target="_blank">WengIndustry.com</a></li>*/}
                    </ul>
                </div>
            </footer>
        )
    }
}
