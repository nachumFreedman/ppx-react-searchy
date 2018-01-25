import React from 'react';
import './Results.css';

const imgSrc = 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

export default ({ results, onReset })=>(  
  <div>
    <ul>
      {
	results.map( (result, i)=> (
	  <li key={i} className='Results'>
	    <a href={result.url}>{result.name}</a>
	    <h3 className='ResultsAddress'>https://www.{result.url}</h3>
	    <p>
	      is a {result.spiritAnimal} find him at
	      <br/>

	    </p>
	  </li>
	) )
      }
    </ul>
  </div>
);

