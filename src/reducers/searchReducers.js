import { SET_SEARCH_RESULTS, SET_SEARCH_QUERY } from '../actions/types';

export const searchResults = function(state = [], action) {
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return [...action.payload];
    default:
      return state;
  }
}

export const searchQuery = function (state = '', action) {
  switch(action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
}