import * as types from "./types";
import fetch from "cross-fetch";

function cacheSearchResults(results, query, totalHits) {
  return {
    type: types.CACHE_SEARCH_RESULTS,
    payload: results,
    query: query,
    totalHits: totalHits,
  };
}

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

export function search(query) {
  return (dispatch, getState) => {
    const search = getState().search;

    if (search.query !== search.lastQuery && search.query !== "") {
      if(!search.resultCache.hasOwnProperty(search.query)) {
        dispatch(fetchSearchResults(query, 0));
      }
      dispatch(setLastQuery(search.query));
    }
  };
}

export function fetchSearchResults(query, pageNumber) {
  return (dispatch) => {
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
    .then((data) => dispatch(cacheSearchResults(data.foods, query, data.totalHits)));
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
