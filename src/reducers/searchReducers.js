import { combineReducers } from "redux";
import { CACHE_SEARCH_RESULTS, SET_SEARCH_QUERY, LOAD_CACHED_RESULTS } from "../actions/types";

export const foodCache = function (state = {}, action) {
  switch(action.type) {
    case CACHE_SEARCH_RESULTS:
      const foods = action.payload.reduce((map, obj) => {
        map[obj.fdcId] = {description: obj.description, brandOwner: obj.brandOwner};
        return map;
      }, {});
      return {...state, ...foods};
    default:
      return state;
  }
}

export const searchResultCache = function (state = {"":[]}, action) {
  switch (action.type) {
    case CACHE_SEARCH_RESULTS:
      const foodIds = action.payload.map((obj) => obj.fdcId);
      let newState = {...state};
      newState[action.query] = foodIds;
      return newState;
    default:
      return state;
  }
};

export const query = function (state = "", action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export const lastQuery = function (state = "", action) {
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
  foodCache,
  searchResultCache: searchResultCache,
  query,
  lastQuery,
});
export default search;
