import React, { Component } from 'react';
import {PhraseGenerator} from './PhraseGenerator';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Button,  } from "@blueprintjs/core";

class App extends Component {
  render() {

    return (
    <div className="App docs-root pt-dark">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{data.title}</h1>

    </header>
    <PhraseGenerator />

  </div>
  );
}
}
export default App;
