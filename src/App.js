import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Query from './Query';
import Results from './Results';

import searchResults from './searchResults';

class App extends Component {
  state = {
    results: []
  }
  
  search = (query)=>
    this.setState({ results: searchResults
      .filter( item => JSON.stringify(item).includes(query) ) })

  reset = ()=> this.setState({ results: [] })
  
  render() {
    const { results } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          results.length ? (
            <Results results={results} onReset={this.reset}/>
          ) : (
            <Query onSearch={this.search}/>
          )
        }
      </div>
    );
  }
}

export default App;
