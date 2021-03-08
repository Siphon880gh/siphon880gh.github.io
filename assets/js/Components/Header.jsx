class Header extends React.Component {
    render() {
        return (
                <header data-component="Header" className="site-header">

                    <div className="page-title-wrapper">
                        <a href="/">
                            <h1 className="page-title">Weng Industry</h1>
                        </a>
                    </div>

                    <nav class="site-nav">
                        <span class="fa fa-grip-lines site-nav-mobile-btn" onclick="this.classList.toggle('active');"></span>
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

                    <span className="clear-fix"></span>

                </header>
        )
    }
}