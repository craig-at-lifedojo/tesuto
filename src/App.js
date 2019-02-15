import React, { Component } from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo" />
          <h1 className="App-title">Welcome to LifeDojo</h1>
        </header>
      </div>
    );
  }
}


export default App;
