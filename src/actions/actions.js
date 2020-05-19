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

export function addToCart(id) {
  return { type: types.ADD_TO_CART, payload: id };
}

export function removeFromCart(id) {
  return { type: types.REMOVE_FROM_CART, payload: id };
}

export function changeServings(id, amount) {
  return { type: types.CHANGE_SERVINGS, id: id, payload: amount };
}
