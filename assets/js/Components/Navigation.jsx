class Navigation extends React.Component {
    constructor(props) {
      super(props);
      
      // default page
      this.state = {page: "Work"};
    }
    isActivePageClass(linkPage) {
        return linkPage===this.state.page?"text-bold-colored":""
    }
    updateActivePage(event) {
        this.setState({page:event.target.innerText});
    }

    onClickMobileHamburgerIcon(event){
        let icon = event.target;
        icon.classList.toggle("active");
    }

    render(props) {
        return (
            <nav data-component="Navigation" className="site-nav">
            <span className="fa fa-grip-lines site-nav-mobile-btn" onClick={this.onClickMobileHamburgerIcon}></span>
            <ul>
                <li>
                    <NavLink to="./tech" className={this.isActivePageClass.call(this, "Tech")} onClick={this.updateActivePage.bind(this)}>Tech</NavLink>
                </li>
                <li>
                    <NavLink to="./whoami" className={this.isActivePageClass.call(this, "WhoAmI")} onClick={this.updateActivePage.bind(this)}>WhoAmI</NavLink>
                </li>
                <li>
                    <NavLink to="./work" className={this.isActivePageClass.call(this, "Work")} onClick={this.updateActivePage.bind(this)}>Work</NavLink>
                </li>
                <li>
                    <NavLink to="./collab"className={this.isActivePageClass.call(this, "Collab")} onClick={this.updateActivePage.bind(this)}>Collab</NavLink>
                </li>
                <li>
                    <NavLink to="./credited" className={this.isActivePageClass.call(this, "Credited")} onClick={this.updateActivePage.bind(this)}>Credited</NavLink>
                </li>
            </ul>
        </nav>
        )
    }
}
