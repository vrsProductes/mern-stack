import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.scss';
import './index.css';
import { DefaultLayout } from './containers';

import Login  from './views/Login/Login';
//import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
export default history;
ReactDOM.render((
<Router history={history}>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login} />
      <Route path="/" name="Home" component={DefaultLayout} />
    </Switch>
  </Router>), document.getElementById('app'));

