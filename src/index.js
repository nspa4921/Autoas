import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import SwePage from "views/SwedishVersion/LandingSwe";

// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/dk" component={LandingPage} exact />
      <Route path="/se" component={SwePage} exact /> 
      {/* <Route exact path="/swedish" component={LandingSwe}/> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
