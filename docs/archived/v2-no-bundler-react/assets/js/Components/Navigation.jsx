class Navigation extends React.Component {
    constructor(props) {
      super(props);
    }

    onClickMobileHamburgerIcon(event){
        let icon = event.target;
        icon.classList.toggle("active");
    }

    collapseMobileMenu() {
        let hamburgerIcon = document.querySelector(".site-nav-mobile-btn");
        hamburgerIcon.classList.remove("active");
    }

    componentDidMount() {
        // console.log("Component did mount");
        document.querySelector("a.whoami").click();
    }

    render(props) {
        return (
            <nav data-component="Navigation" className="site-nav">
            <span className="fa fa-grip-lines site-nav-mobile-btn" onClick={this.onClickMobileHamburgerIcon}></span>
            <ul>
                <li>
                    <NavLink to="./tech" onClick={this.collapseMobileMenu}>Tech</NavLink>
                </li>
                <li>
                    <NavLink to="./whoami" onClick={this.collapseMobileMenu} className="whoami">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="./resume" onClick={this.collapseMobileMenu}>Resume</NavLink>
                </li>
                <li>
                    <NavLink to="./work" onClick={this.collapseMobileMenu}>Work</NavLink>
                </li>
                <li>
                    <NavLink to="./collab" onClick={this.collapseMobileMenu}>Collab</NavLink>
                </li>
                <li>
                    <NavLink to="./credited" onClick={this.collapseMobileMenu}>Credited</NavLink>
                </li>
                <li>
                    <NavLink to="./contact" onClick={this.collapseMobileMenu}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        )
    }
}
