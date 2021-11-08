import "./App.css";
import NavBar from "../NavBar/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { About } from "../../Pages/About/About";
import { Blog } from "../../Pages/Blog/Blog";
import { Contact } from "../../Pages/Contact/Contact";
import Search from "../Search/Search";

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Home/>
              <Search/>
            </Route>
            <Route path="/about" >
              <About/>
            </Route>
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}
 
export default App;
