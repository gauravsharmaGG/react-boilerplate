import React from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './components/Home';
import Assignment from './components/Assignment';
import './App.scss';

const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/assignment" component={Home} />
      </Switch>
    </main>
  </div>
);

export default hot(module)(App);
