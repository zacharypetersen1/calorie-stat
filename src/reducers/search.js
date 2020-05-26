import { combineReducers } from "redux";
import { CACHE_SEARCH_RESULTS, SET_SEARCH_QUERY, LOAD_CACHED_RESULTS } from "../actions/types";

const resultCache = function (state = {}, action) {
  switch (action.type) {
    case CACHE_SEARCH_RESULTS:
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
    case CACHE_SEARCH_RESULTS:
      let newState = {...state};
      newState[action.query] = action.totalHits;
      return newState;
    default:
      return state;
  }
}

const query = function (state = "", action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

const lastQuery = function (state = "", action) {
  switch (action.type) {
    case CACHE_SEARCH_RESULTS:
      return action.query;
    case LOAD_CACHED_RESULTS:
      return action.query;
    default:
      return state;
  }
};

const search = combineReducers({
  resultCache,
  totalHits,
  query,
  lastQuery,
});
export default search;
