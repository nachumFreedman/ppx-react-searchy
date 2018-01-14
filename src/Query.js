import React, { Component } from 'react';
import './Query.css';

const imgSrc = 'http://www.azquotes.com/picture-quotes/quote-the-first-principle-is-that-you-must-not-fool-yourself-and-you-are-the-easiest-person-richard-p-feynman-9-53-68.jpg';

class Query extends Component {
  state = {
    query: '',
  }

  setQuery = ({ target: { value } })=> this.setState({ query: value })
  
  render() {
    return (
      <div className='Query'>
        <img src={imgSrc} alt='what is this tomfoolery?'/>
        <br/>
        <input value={this.state.query} onChange={this.setQuery}/>
        <br/>
        <button onClick={()=> this.props.onSearch(this.state.query)}
                disabled={!this.state.query.length}>
          Search
        </button>
      </div>
    );
  }
}

export default Query;
