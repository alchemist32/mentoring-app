// @flow
import './App.css';
import React, { Suspense } from 'react';
import ContainerComponent from './components/ContainerComponent';
import HeaderComponent from './components/HeaderComponent';
import MoviePageComponent from './components/MoviePageComponent';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component<{}> {
  render(): React$Element<'div'> {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/movie/:resultId">
              <Suspense fallback={<h2>Loading...</h2>}>
                <MoviePageComponent />
              </Suspense>
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
