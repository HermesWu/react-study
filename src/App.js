import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function a(){
  alert(1)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            编辑 <code>src/App.js</code> 修改页面上的内容.
          </p>
          <button onClick={a}>点我</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
