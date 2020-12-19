import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();
// const theme = createMuiTheme({
//   palette : {
//       type : 'dark',
//       background : {
//           default : "transparent"
//       },
//       secondary : {
//           main : '#E19A4C'
//       }
//   }
// })

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    {/* < MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline /> */}
    <Route path="/index-page" component={Components} /> 
      <Route path="/" component={LandingPage} />
      {/* </ThemeProvider>
      </ MuiThemeProvider> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
