import React, { Component } from 'react';
import './Query.css';

const imgSrc = 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

class Query extends Component {
  state = {
    query: '',
  }
    
    setQuery = ({ target: { value } })=> this.setState({ query: value })
    
    render() {
	return (
	    <div className='Query'>
		<img className='googleImg' src={imgSrc} alt='what is this tomfoolery?'/>
		<br/>
		<input value={this.state.query} onChange={this.setQuery}/>
		<br/>
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
}

export default Query;
