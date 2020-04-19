import { useSelector } from 'react-redux';
import React from 'react'

export default function Search() {
  const results = useSelector(state => state.searchResults);

  return (
    <div>
      <form>
        <label htmlFor='foodName'>Food Name</label>
        <input type='text' id='foodName'/>
        <input type='button' value='Search'/>
        <ul>
          { results.map( (result, index) => <li key={index}>{result}</li> )}
        </ul>
      </form>
    </div>
  )
}