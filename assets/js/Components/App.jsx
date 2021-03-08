// import all components below

class App extends React.Component {
    render() {
        return (
            <div data-component="App" className="container-fluid p-0">
                <Header></Header>
                
                    <WhoAmI></WhoAmI>
            </div>
        )
    }
}

const reactRoot = document.querySelector('.react-root');
ReactDOM.render( <App/> , reactRoot);