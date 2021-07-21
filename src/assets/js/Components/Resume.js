
import React from "react";
import ReactDOM from "react-dom";

const baseLink = "https://www.wengindustry.com/me/docs/resume/";
const filename = "Fung, Weng Fei - Resume - 2022 Web Developer v1.0.doc";
const docLink = baseLink + filename;

export default class Resume extends React.Component {
    render() {
        return (
                <div data-component="Resume" className="resume">
                    <iframe src={"https://view.officeapps.live.com/op/embed.aspx?src=" + docLink}></iframe>
                    <div class="download-resume"><a className="fa-download" href={docLink}>&nbsp;Download resume</a></div>
                </div>
        )
    }
}
