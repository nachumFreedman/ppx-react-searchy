import React, { Component } from 'react';
import './Query.css';

const imgSrc = 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

const mockAutos = [
  'nik', 'nox', 'lax', 'lex'
];

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
    this.setState({ query: value });
    this.props.onSearch( value );
  }
  
  render() {
    const { autos } = this.state;
    
    return (
      <div className='Query'>
	<img className='googleImg' src={imgSrc} alt='what is this tomfoolery?'/>
	<div>
	  <input value={this.state.query} autoFocus onChange={this.setQueryFromInput}/>
          {
            !autos.length ? null : (
              <ul>
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
