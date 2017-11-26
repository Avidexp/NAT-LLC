import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import Feature from './feature';
import RequireAuth from './auth/require_auth';
import Homepage from './homepage';
import Dashboard from './dashboard';
import '../index.css';
// import Tripbuild from './tripbuild';
// import Tripresults from './tripresults';
// import Places from './places';
import MessageApp from '../components/MessageApp';
import Equipment from './Equipment';
export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/signout' component={Signout} />
          <Route path='/messenger' component={MessageApp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/Equipment' component={Equipment} />
          <Route path='/feature' component={RequireAuth(Feature)} />
        </div>
      </Router>
    );
  }
};
