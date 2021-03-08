// import all components below

class App extends React.Component {
    render() {
        return (
            <Router>
                <div data-component="App" className="container-fluid p-0">
                    <Header></Header>

                    <Switch>
                        <Route path="*/tech" component={Tech}/>
                        <Route path="*/whoami" component={WhoAmI}/>
                        <Route path="*/work" component={Work}/>
                        <Route path="*/collab" component={Collab}/>
                        <Route path="*/credited" component={Credit}/>
                    </Switch>

                    <Footer/>

                </div>
            </Router>
        )
    }
}

const reactRoot = document.querySelector('.react-root');
ReactDOM.render(<App/>, reactRoot);