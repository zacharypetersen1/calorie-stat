import { combineReducers } from "redux";
import * as types from "../actions/types";

const cache = function (state = {}, action) {
  switch(action.type) {
    case types.FINISH_FETCHING_SEARCH:
    case types.FINISH_LOAD_MORE:
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
