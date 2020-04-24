import { combineReducers } from 'redux';
import { SET_SEARCH_RESULTS, SET_SEARCH_QUERY } from '../actions/types';

export const results = function(state = [], action) {
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return [...action.payload];
    default:
      return state;
  }
}

export const query = function (state = '', action) {
  switch(action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
}

export const lastQuery = function (state= '', action) {
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return action.query;
    default:
      return state;
  }
}

const search = combineReducers({
  results,
  query,
  lastQuery
});
export default search;