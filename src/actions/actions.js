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
        const body = {
          query,
          pageSize: 20,
          pageNumber: 0,
        };
    
        fetch("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=C6cV4ea5SYHatxL7N2ETU2awLx10MY3vbKOKE7wS", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then((response) => response.json())
        .then((data) => dispatch(finishFetchingSearch(data.foods, query, data.totalHits)));
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
    const body = {
      query,
      pageSize: 20,
      pageNumber,
    };

    fetch("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=C6cV4ea5SYHatxL7N2ETU2awLx10MY3vbKOKE7wS", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json())
    .then((data) => dispatch(finishLoadMore(query, data.foods)));
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
