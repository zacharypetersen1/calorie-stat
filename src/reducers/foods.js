import { combineReducers } from "redux";
import { CACHE_SEARCH_RESULTS } from "../actions/types";

const cache = function (state = {}, action) {
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

const foods = combineReducers({
  cache,
});
export default foods;
