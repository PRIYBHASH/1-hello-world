import React, { Component } from 'react';
import logo from './kp.png';
import './App.css';
import ReactBasics from './ReactBasics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ReactBasics />
        </header>
      </div>
    );
  }
}

export default App;
