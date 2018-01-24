import React, { Component } from 'react';
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
