import React from 'react'
import SearchResults from './SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../actions/actions';
import { searchFoodsAsync } from '../scripts/async';

export default function SearchSection() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchQuery);

  return (
    <div>
        <label htmlFor='foodName'>Food Name</label>
        <input type='text' value={searchQuery} id='foodName' onChange={(e) => dispatch(setSearchQuery(e.target.value))}/>
        <button type='button' onClick={() => searchFoodsAsync(searchQuery, dispatch)}>Search</button>
        <SearchResults/>
    </div>
  )
}