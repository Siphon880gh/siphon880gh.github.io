
import React from "react";
import ReactDOM from "react-dom";

export default class Project extends React.Component {
    openWindow() {
        window.open(this.props.link);
    }
    toggleDescription(event) {
        event.preventDefault();
        event.stopPropagation();

        let project = event.target.closest("figure");
        let descs = project.querySelector("figcaption");
        let github = project.querySelector("add-github-link");
        if(descs)
            descs.classList.toggle("display-none");
        if(github)
            github.classList.toggle("display-none");
    }
    render() {
        // If provided color code, add color overlay. Otherwise, add a default color overlay
        let {bgColor} = this.props;
        if(!bgColor) bgColor = "purple";
        function getColorOverlay(bgColor) {
            return {backgroundColor: bgColor};
        }

        // If provided github link, add github link
        let repos = "";
        if(this.props.repos) {
            repos = (<aside className="add-github-link">
                <a target="_blank" href={this.props.repos}>Checkout Github repository</a>
            </aside>);
        }
        return (
            <figure className="project" data-component="Project">
                {repos}
                <img className="img-contain" src={this.props.screenshot} alt={this.props.title}/>
                <figcaption>
                    <h3>{this.props.title}</h3>
                    <p>
                        {this.props.desc}  
                    </p>
                    <span><label>Tech:&nbsp;</label><span>{this.props.tech}</span></span>
                </figcaption>
                <div className="overlay" style={getColorOverlay.call(null, bgColor)} onClick={this.openWindow.bind(this)}></div>
                <div className="overlay-toggle-description">
                    <a onClick={this.toggleDescription}><i className='fa fa-eye'></i></a>
                </div>
            </figure>
        )
    }
}