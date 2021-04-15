
import React from "react";
import ReactDOM from "react-dom";

const filename = "Fung, Weng Fei - Resume - Central Grader or Tutor - Transitional v1.2.docx";
const baseLink = "https://www.wengindustry.com/siphon880gh.github.io/docs/resume/";
const docLink = baseLink + filename;

export default class Resume extends React.Component {
    render() {
        return (
                <div data-component="Resume" className="resume">
                    <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${docLink}`}></iframe>
                    <div class="download-resume"><a className="fa-download" href={docLink}>&nbsp;Download resume</a></div>
                </div>
        )
    }
}
