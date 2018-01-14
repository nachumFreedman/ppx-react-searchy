import React from 'react';
import './Results.css';

export default ({ results, onReset })=>(
  <ul>
    {
      results.map( (result, i)=> (
        <li key={i}>
          <h3>{result.name}</h3>
          <p>
            is a {result.spiritAnimal} find him at
            <br/>
            <a href={result.url}>{result.url}</a>
          </p>
        </li>
      ) )
    }
    <li key='reset'><button onClick={onReset}>Reset</button></li>
  </ul>
);
