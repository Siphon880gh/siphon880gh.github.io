// import navigation

class Header extends React.Component {
    render() {
        return (
                <header data-component="Header" className="site-header">

                    <div className="page-title-wrapper">
                        <a href="./">
                            <h1 className="page-title">Weng Industry</h1>
                        </a>
                    </div>

                    <Navigation></Navigation>

                    <span className="clear-fix"></span>

                </header>
        )
    }
}