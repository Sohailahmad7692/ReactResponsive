import './App.css';
import {Route,Switch} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar"
import About from "./About"
import Contact from "./Contact";
import Service from "./Service";
import Home from "./Home"
import $ from 'jquery';
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/service" component={Service}></Route>
    </Switch>
    </>
  );
}

export default App;
