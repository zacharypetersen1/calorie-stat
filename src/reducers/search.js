import { combineReducers } from "redux";
import * as types from "../actions/types";

const resultCache = function (state = {}, action) {
  switch (action.type) {
    case types.CACHE_SEARCH_RESULTS:
      const foodIds = action.payload.map((obj) => obj.fdcId);
      let newState = {...state};
      if(!newState.hasOwnProperty(action.query)){
        newState[action.query] = [];
      }
      newState[action.query] = [...newState[action.query], ...foodIds];
      return newState;
    default:
      return state;
  }
};

const totalHits = function (state = {}, action) {
  switch (action.type) {
    case types.CACHE_SEARCH_RESULTS:
      let newState = {...state};
      newState[action.query] = action.totalHits;
      return newState;
    default:
      return state;
  }
}

const query = function (state = "", action) {
  switch (action.type) {
    case types.SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

const lastQuery = function (state = "", action) {
  switch (action.type) {
    case types.SET_LAST_QUERY:
      return action.query;
    case types.CACHE_SEARCH_RESULTS:
      return action.query;
    default:
      return state;
  }
};

const isFetchingSearch = function(state = false, action) {
  switch (action.type) {
    case types.START_FETCHING_SEARCH:
      return true;
    case types.CACHE_SEARCH_RESULTS:
      return false;
    default:
      return state;
  }
}

const search = combineReducers({
  resultCache,
  totalHits,
  query,
  lastQuery,
  isFetchingSearch,
});
export default search;
