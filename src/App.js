import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./component/home";
import Hero from "./component/hero";
import About from "./component/about";
import Courses from "./component/courses";
import Trainers from "./component/trainers";
import Events from "./component/events";
import Pricing from "./component/pricing";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Features from "./component/features";

function App() {
  return (
    <>
      <Router>
        <div>
          <Home />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Hero} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/trainers" component={Trainers} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/home" component={Features} />
          {/* <Route exact path="/" component={Footer} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
