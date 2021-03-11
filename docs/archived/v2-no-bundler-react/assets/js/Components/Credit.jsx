class Credit extends React.Component {
    render() {
        return (
            <aside data-component="credit" id="credited" className="credited flushed-to-grid">
                <div className="content-inner">
                    <p className="text-med">Weng was also credited at:</p>
                    <ul>

                        <li>
                            <details open>
                                <summary>
                                    <i className="fa fa-info"></i>
                                    <a href="https://exrx.net/People/Staff/" target="_blank">ExRx.net - Exercise Rx</a>
                                </summary>
                                <div>Exercise information and news. Also now provides exercise information API to workout apps. Weng created an admin panel to manage exercise information and also created an API that other companies can subscribe to. Weng orientated
                                    many new interns to the code at ExRx.</div>
                            </details>
                        </li>

                        <li>
                            <details open>
                                <summary>
                                    <i className="fa fa-info"></i>
                                    <a href="https://web.archive.org/web/20181120025439/http://www.mixotype.com/#about" target="_blank">Mixotype.com
                                    </a>
                                </summary>
                                <div>Social network that matches you by the Mixotype patented personality trait test. Weng worked on their Android beta app and social network web app.</div>
                            </details>
                        </li>

                        <li>
                            <details open>
                                <summary>
                                    <i className="fa fa-info"></i>
                                    <a href="https://www.vibee.tv/vibeetv-team/" target="_blank">Vibee TV</a>
                                </summary>
                                <div>Online music video channel and music news. Based in Italy. Weng worked on solutions to help streamline the music video management, add live DJing, and a commenting system.</div>
                            </details>
                        </li>

                        <li>
                            <details open>
                                <summary>
                                    <i className="fa fa-info"></i>
                                    <a href="assets/img/testimonials.png" target="_blank">LinkedIn Testimonies</a>
                                    <span>&nbsp;|&nbsp;</span>
                                    <a href="//linkedin.com/in/weng-fung/" target="_blank">LinkedIn</a>
                                </summary>
                                <div>Testimonials from satisfied clients.</div>
                            </details>
                        </li>

                    </ul>
                </div>
            </aside>
        )
    }
}
