import { combineReducers } from "redux";
import * as types from "../actions/types";

const cache = function (state = {}, action) {
  switch(action.type) {
    case types.FINISH_FETCHING_SEARCH:
    case types.FINISH_LOAD_MORE:
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
    case types.START_LOAD_NUTRITION:
      let state1 = new Map(state);
      state1.set(action.id, {isLoaded: false});
      return state1;
    case types.SUCESS_LOAD_NUTRITION:
      let state2 = new Map(state);
      state2.set(action.id, { ...action.payload, isLoaded: true, success: true });
      return state2;
    default: return state;
  }
}

const hues = function (state = new Map(), action) {
  switch(action.type) {
    case types.ASSIGN_HUE:
      let newState = new Map(state);
      newState.set(action.id, action.hue);
      return newState;
    default:
      return state;
  }
}

const currentHue = function (state = 0, action) {
  switch(action.type) {
    case types.ASSIGN_HUE:
      return (state + 85) % 360;
    default:
      return state;
  }
}

const foods = combineReducers({
  cache,
  nutrition,
  hues,
  currentHue,
});
export default foods;
