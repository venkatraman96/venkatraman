// import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker';

import './theme/globalStyle'

import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Covid from "./layouts/Covid.js";

import "../src/assets/css/material-dashboard-react.css?v=1.8.0";
import App from './containers/App';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/covid" component={Covid} />
      <Route path="/home" component={App} />
      <Redirect from="/" to="/home" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);