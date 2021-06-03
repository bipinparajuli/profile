import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import PageNotFound from "./Component/PageNotFound"

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />


        <Route exact component={PageNotFound} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
