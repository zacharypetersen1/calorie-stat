import * as types from "./types";
import fetch from "cross-fetch";

export function setLastQuery(query) {
  return { type: types.SET_LAST_QUERY, query: query };
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

function changeServings(id, amount) {
  return { type: types.CHANGE_SERVINGS, id: id, payload: amount };
}

function startFetchingSearch() {
  return { type: types.START_FETCHING_SEARCH };
}

function finishFetchingSearch(results, query, totalHits) {
  return {
    type: types.FINISH_FETCHING_SEARCH,
    payload: results,
    query: query,
    totalHits: totalHits,
  };
}

export function search(query) {
  return (dispatch, getState) => {
    const search = getState().search;

    if (search.query !== search.lastQuery && search.query !== "") {
      if(search.resultCache.hasOwnProperty(search.query)) {
        // Load cached results
        dispatch(setLastQuery(search.query));
      }
      else {
        dispatch(startFetchingSearch());
    
        fetch(`http://localhost:3030/fatsecret?method=foods.search&search_expression=${query}&format=json&page_number=0&max_results=20`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json())
        .then((data) => dispatch(finishFetchingSearch(data.foods.food, query, data.foods.total_results)));
      }
    }
  };
}

function startLoadMore(query) {
  return {
    type: types.START_LOAD_MORE,
    query,
  };
}

function finishLoadMore(query, results) {
  return {
    type: types.FINISH_LOAD_MORE,
    query,
    payload: results,
  }
}

export function loadMore (query) {
  return (dispatch, getState) => {

    // Don't proceed if already loading more
    if(getState().search.isLoadingMore.get(query)) {
      return;
    }

    dispatch(startLoadMore(query));
    
    const pageNumber = (getState().search.resultCache[query].length / 20) + 1;

    fetch(`http://localhost:3030/fatsecret?method=foods.search&search_expression=${query}&format=json&page_number=${pageNumber}&max_results=20`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .then((data) => dispatch(finishLoadMore(query, data.foods.food)));
  }
}

export function servingsFormChange(id, str, target) {
  return (dispatch) => {
    if(str.match(/^\d{0,2}$/)) {
      const newServings = str === "" ? 0 : parseInt(str);
      dispatch(changeServings(id, newServings));
    }
    if(str === "") {
      setTimeout(() => target.select(), 0);
    }
  };
}

export function incrimentServings(id, incriment) {
  return (dispatch, getState) => {
    const newServings = getState().cart.servings.get(id) + incriment;
    if(newServings >= 0 && newServings <= 99) {
      dispatch(changeServings(id, newServings));
    }
  }
}
