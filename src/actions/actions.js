import * as types from "./types";

export function setSearchResults(results, query) {
  return {
    type: types.SET_SEARCH_RESULTS,
    payload: results,
    query: query,
  };
}

export function setSearchQuery(query) {
  return { type: types.SET_SEARCH_QUERY, payload: query };
}
