import * as types from './types';

export function setSearchResults(results) {
  return { type: types.SET_SEARCH_RESULTS, payload: results };
}

export function setSearchQuery(query) {
  return { type: types.SET_SEARCH_QUERY, payload: query };
}

export function setOldSearchQuery(oldQuery) {
  return { type: types.SET_OLD_SEARCH_QUERY, payload: oldQuery };
}