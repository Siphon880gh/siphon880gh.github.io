class Footer extends React.Component {
    render() {
        return (
            <footer data-component="Footer" id="contact" className="contact section container-fluid">
                <h2 className="section-title hidden-xs-up">Contact</h2>
                <div className="spacer-vertical-small hidden-xs-up"></div>
                <div className="flex flex-row flex-space-between">
                    <h3 className="text-light hidden-xs-down">Contact:</h3>
                    <ul className="flex flex-row flex-space-around">
                        <li><a href="tel:3238427514" target="_blank">323-842-7514</a></li>
                        <li><a href="mailto:weffung@ucdavis.edu" target="_blank">weffung@ucdavis.edu</a></li>
                        <li><a href="//github.com/Siphon880gh" target="_blank">Github</a></li>
                        <li><a href="//linkedin.com/in/weng-fung/" target="_blank">LinkedIn</a></li>
                        <li><a href="//www.wengindustry.com" target="_blank">WengIndustry.com</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}
