import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class WordGenerator extends Component {
  constructor(props) {
    super(props);
    this.generateHandler = this.generateHandler.bind(this);
    this.state = { word : "click me"};
  }

  generateHandler() {
    const random = Math.floor(Math.random() * data.words.length);
    const newGenerate = this.setState( { word : (data.words[random].word)});
  }

  render() {
    return(
        <button onClick={this.generateHandler}>
          {this.state.word}
        </button>
      )
  }
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{data.title}</h1>

         
        </header>
        <p className="App-intro">
          This button, when clicked, will produce a random word!
        </p>
        <WordGenerator />
      </div>
    );
  }
}

export default App;

