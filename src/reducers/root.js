import { combineReducers } from 'redux';
import { searchResults, searchQuery } from './searchReducers';

const root = combineReducers({
  searchResults,
  searchQuery
});
export default root;