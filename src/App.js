import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Blogs from "./Component/Blogs"
import Projects from "./Component/Projects"
import Contact from "./Component/Contact"

import PageNotFound from "./Component/PageNotFound"

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blogs" component={Blogs} />


        <Route exact component={PageNotFound} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
