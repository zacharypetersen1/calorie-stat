import * as types from "./types";

export function cacheSearchResults(results, query, totalHits) {
  return {
    type: types.CACHE_SEARCH_RESULTS,
    payload: results,
    query: query,
    totalHits: totalHits,
  };
}

export function loadCachedResults(query) {
  return { type: types.LOAD_CACHED_RESULTS, query: query };
}

export function setSearchQuery(query) {
  return { type: types.SET_SEARCH_QUERY, payload: query };
}
