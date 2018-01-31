import React, { Component } from 'react';
import './Query.css';



const mockAutos = ['nik', 'nox', 'alex'];

class Query extends Component {
  state = {
    query: '',
    autos: [],
  }
  
  setQueryFromInput = ({ target: { value } })=> {
    this.setState({ query: value });
    
    value ?
    this.setState({ autos: mockAutos.filter(a => a.includes(value)) }) :
    this.setState({ autos: [] });
  }
  
  makeQuery = value => {
    this.setState({ query: value, autos: [] });
    this.props.onSearch( value );
  }

  onKeyPress = e => (
    e.key === 'Enter' ?
    this.makeQuery(this.state.query)
    : null
  )
  
  render() {
    const { autos } = this.state;
    
    console.log(this.props)
    return (
      <div className={this.props.className}>
	<div className='query-container'>
	  <input value={this.state.query}
                 onKeyPress={this.onKeyPress}
                 autoFocus
                 placeholder='Search Google or type URL'
                 onChange={this.setQueryFromInput}/>

          {
            !autos.length ? null : (
              <ul className='autocomplete'>
                {
                  autos.map((auto, i)=> (
                    <li key={i} onClick={()=> this.makeQuery(auto)}>
                      {auto}
                    </li>
                  ) )
                }
              </ul>
            )
          }
	</div>
        
	<button onClick={()=> this.props.onSearch(this.state.query)}
                disabled={!this.state.query.length}>
	  Search
        </button>
	<button
	  onClick={()=> this.props.onSearch(this.state.query)}
	  disabled={!this.state.query.length}>I'm feeling lucky</button>

      </div>
    );
  }
};

export default Query;
