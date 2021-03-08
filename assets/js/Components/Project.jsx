class Project extends React.Component {
    openWindow() {
        window.open(this.props.link);
    }
    toggleDescription(event) {
        event.preventDefault();
        let project = event.target.closest("figure");
        let descs = project.querySelector("figcaption");
        descs.classList.toggle("display-none");
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        let repos = "";
        if(this.props.repos) {
            repos = (<aside className="add-github-link">
                <a target="_blank" href="https://github.com/Siphon880gh/goals-social">Checkout Github repository</a>
            </aside>);
        }
        return (
            <figure className="project" data-component="Project" onClick={this.openWindow.bind(this)}>
                <img className="img-contain" src={this.props.screenshot} alt={this.props.title}/>
                {repos}
                <figcaption>
                    <h3>{this.props.title}</h3>
                    <p>
                        {this.props.desc}  
                    </p>
                </figcaption>
                <div className="overlay overlay-color-1"></div>
                <div className="overlay-toggle-description">
                    <a onClick={this.toggleDescription}><i className='fa fa-eye'></i></a>
                </div>
            </figure>
        )
    }
}