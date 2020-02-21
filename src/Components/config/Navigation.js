import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home.js";

const Navigation = () =>{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />      
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;