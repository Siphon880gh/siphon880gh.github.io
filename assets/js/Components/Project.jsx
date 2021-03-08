class Project extends React.Component {
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
        let repos = "";
        if(this.props.repos) {
            repos = (<aside className="add-github-link">
                <a target="_blank" href="https://github.com/Siphon880gh/goals-social">Checkout Github repository</a>
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
                </figcaption>
                <div className="overlay overlay-color-1" onClick={this.openWindow.bind(this)}></div>
                <div className="overlay-toggle-description">
                    <a onClick={this.toggleDescription}><i className='fa fa-eye'></i></a>
                </div>
            </figure>
        )
    }
}