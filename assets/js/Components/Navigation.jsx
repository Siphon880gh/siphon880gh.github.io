class Navigation extends React.Component {
    constructor(props) {
      super(props);
      
      // default page
      this.state = {page: "Work"};
    }
    isActivePageClass(pageTitle) {
        return this.state.page===pageTitle?"bg-danger":""
    }
    render() {
        return (
            <nav data-component="Navigation" className="site-nav">
            <span className="fa fa-grip-lines site-nav-mobile-btn" onclick="this.classNameList.toggle('active');"></span>
            <ul>
                <li>
                    <a href="#slide-a" className={this.isActivePageClass("Tech")}>Tech</a>
                </li>
                <li>
                    <a href="#about-anchor" className={this.isActivePageClass("WhoAmI")}>WhoAmI</a>
                </li>
                <li>
                    <a href="#work" className={this.isActivePageClass("Work")}>Work</a>
                </li>
                <li>
                    <a href="#collab" className={this.isActivePageClass("Collab")}>Collab</a>
                </li>
                <li>
                    <a href="#credited" className={this.isActivePageClass("Credited")}>Credited</a>
                </li>
                <li>
                    <a href="#contact" className={this.isActivePageClass("Contact")}>Contact</a>
                </li>
            </ul>
        </nav>
        )
    }
}
