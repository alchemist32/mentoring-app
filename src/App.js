// @flow
import './App.css';
import React from 'react';
import ContainerComponent from './components/ContainerComponent';
import HeaderComponent from './components/HeaderComponent';

export default class App extends React.Component<{}> {
  render(): React$Element<'div'> {
    return (
      <div className="App">
        <HeaderComponent />
        <ContainerComponent />
      </div>
    );
  }
}
