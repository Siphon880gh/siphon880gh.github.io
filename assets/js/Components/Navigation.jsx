class Navigation extends React.Component {
    render() {
        return (
            <nav data-component="Navigation" className="site-nav">
            <span className="fa fa-grip-lines site-nav-mobile-btn" onclick="this.classNameList.toggle('active');"></span>
            <ul>
                <li>
                    <a href="#slide-a">Tech</a>
                </li>
                <li>
                    <a href="#about-anchor">WhoAmI</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#collab">Collab</a>
                </li>
                <li>
                    <a href="#credited">Credited</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        )
    }
}
