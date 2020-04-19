import { SET_SEARCH_RESULTS } from '../actions/types';

export const searchResults = function(state = ['a', 'b', 'c'], action) {
  switch(action) {
    case SET_SEARCH_RESULTS:
      return [...action.payload];
    default:
      return state;
  }
}