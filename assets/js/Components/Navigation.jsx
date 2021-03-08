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
                    <NavLink to="./tech" activeClassName="text-bold-colored">Tech</NavLink>
                </li>
                <li>
                    <NavLink to="./whoami" activeClassName="text-bold-colored">WhoAmI</NavLink>
                </li>
                <li>
                    <NavLink to="./work" activeClassName="text-bold-colored">Work</NavLink>
                </li>
                <li>
                    <NavLink to="./collab" activeClassName="text-bold-colored">Collab</NavLink>
                </li>
                <li>
                    <NavLink to="./credited" activeClassName="text-bold-colored">Credited</NavLink>
                </li>
            </ul>
        </nav>
        )
    }
}
