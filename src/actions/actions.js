import * as types from './types';

export function setSearchResults(results) {
  return { type: types.SET_SEARCH_RESULTS, payload: results };
}

export function setSearchQuery(query) {
  return { type: types.SET_SEARCH_QUERY, payload: query };
}