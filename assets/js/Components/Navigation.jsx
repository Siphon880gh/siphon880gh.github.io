class Navigation extends React.Component {
    constructor(props) {
      super(props);
      
      // default page
      this.state = {page: "Work"};
    }
    isActivePageClass(linkPage) {
        return linkPage===this.state.page?"bg-danger":""
    }
    updateActivePage(event) {
        this.setState({page:event.target.innerText});
    }
    render(props) {
        return (
            <nav data-component="Navigation" className="site-nav">
            <span className="fa fa-grip-lines site-nav-mobile-btn" data-onclick="this.classNameList.toggle('active');"></span>
            <ul>
                <li>
                    <a href="#slide-a" className={this.isActivePageClass.call(this, "Tech")} onClick={this.updateActivePage.bind(this)}>Tech</a>
                </li>
                <li>
                    <a href="#about-anchor" className={this.isActivePageClass.call(this, "WhoAmI")} onClick={this.updateActivePage.bind(this)}>WhoAmI</a>
                </li>
                <li>
                    <a href="#work" className={this.isActivePageClass.call(this, "Work")} onClick={this.updateActivePage.bind(this)}>Work</a>
                </li>
                <li>
                    <a href="#collab" className={this.isActivePageClass.call(this, "Collab")} onClick={this.updateActivePage.bind(this)}>Collab</a>
                </li>
                <li>
                    <a href="#credited" className={this.isActivePageClass.call(this, "Credited")} onClick={this.updateActivePage.bind(this)}>Credited</a>
                </li>
                <li>
                    <a href="#contact" className={this.isActivePageClass.call(this, "Contact")} onClick={this.updateActivePage.bind(this)}>Contact</a>
                </li>
            </ul>
        </nav>
        )
    }
}
