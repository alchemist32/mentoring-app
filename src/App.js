// @flow
import './App.css';
import React from 'react';
import ContainerComponent from './components/ContainerComponent';
import HeaderComponent from './components/HeaderComponent';
import MoviePageComponent from './components/MoviePageComponent';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends React.Component<{}> {
  render(): React$Element<'div'> {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/movie/:resultId">
              <div className="App">
                <MoviePageComponent />
              </div>
            </Route>
            <Route path="/">
              <ContainerComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
