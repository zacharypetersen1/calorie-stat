import { combineReducers } from "redux";
import * as types from "../actions/types";

const cache = function (state = {}, action) {
  switch(action.type) {
    case types.FINISH_FETCHING_SEARCH:
    case types.FINISH_LOAD_MORE:
      console.log(action);
      const foods = action.payload.reduce((map, obj) => {
        map[obj.food_id] = {description: obj.food_name, brandOwner: obj.brand_name};
        return map;
      }, {});
      return {...state, ...foods};
    default:
      return state;
  }
}

const nutrition = function (state = new Map(), action) {
  switch(action.type) { 
    default: return state;
  }
}

const foods = combineReducers({
  cache,
  nutrition,
});
export default foods;
