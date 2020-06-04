import { combineReducers } from "redux";
import * as types from "../actions/types";

const resultCache = function (state = {}, action) {
  switch (action.type) {
    case types.FINISH_FETCHING_SEARCH:
      let newState = {...state};
      newState[action.query] = action.payload.map((obj) => obj.food_id);
      return newState;
    case types.FINISH_LOAD_MORE:
      let newState2 = {...state};
      const newIds = action.payload.map((obj) => obj.food_id);
      newState2[action.query] = [...newState2[action.query], ...newIds];
      return newState2;
    default:
      return state;
  }
};

const totalHits = function (state = {}, action) {
  switch (action.type) {
    case types.FINISH_FETCHING_SEARCH:
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
    case types.FINISH_FETCHING_SEARCH:
      return action.query;
    default:
      return state;
  }
};

const isFetchingSearch = function(state = false, action) {
  switch (action.type) {
    case types.START_FETCHING_SEARCH:
      return true;
    case types.FINISH_FETCHING_SEARCH:
      return false;
    default:
      return state;
  }
}

const isLoadingMore = function(state = new Map(), action) {
  switch (action.type) {
    case types.FINISH_FETCHING_SEARCH:
      let newState = new Map(state);
      newState.set(action.query, false);
      return newState;
    case types.START_LOAD_MORE:
      let newState2 = new Map(state);
      newState2.set(action.query, true);
      return newState2;
    case types.FINISH_LOAD_MORE:
      let newState3 = new Map(state);
      newState3.set(action.query, false);
      return newState3;
    default: return state;
  }
}

const search = combineReducers({
  resultCache,
  totalHits,
  query,
  lastQuery,
  isFetchingSearch,
  isLoadingMore,
});
export default search;
