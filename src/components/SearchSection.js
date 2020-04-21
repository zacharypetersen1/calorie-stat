import React from 'react';
import SearchResults from './SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../actions/actions';
import { trySearch } from '../scripts/helpers';

export default function SearchSection() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.search.query);
  const oldQuery = useSelector(state => state.search.oldQuery);

  return (
    <div>
        <label htmlFor='foodName'>Food Name</label>
        <input 
          type='text' 
          value={query} 
          id='foodName' 
          onChange={ e => dispatch(setSearchQuery(e.target.value)) } 
          onKeyUp={ 
            e => { if(e.keyCode === 13 ) trySearch(query, oldQuery, dispatch) }
          }/>
        <button type='button' onClick={ () => trySearch(query, oldQuery, dispatch) }>Search</button>
        <SearchResults/>
    </div>
  )
}