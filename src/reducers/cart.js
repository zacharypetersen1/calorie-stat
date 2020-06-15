import { combineReducers } from "redux";
import * as types from "../actions/types";

const items = function(state = new Set(), action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      let addState = new Set(state);
      addState.add(action.payload);
      return addState;
    case types.REMOVE_FROM_CART:
      let remState = new Set(state);
      remState.delete(action.payload);
      return remState;
    default: 
      return state;
  }
};

const servings = function(state = new Map(), action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      let copy = new Map(state);
      copy.set(action.payload, 1);
      return copy;
    case types.REMOVE_FROM_CART:
      let copy2 = new Map(state);
      copy2.delete(action.payload);
      return copy2;
    case types.CHANGE_SERVINGS:
      let copy3 = new Map(state);
      copy3.set(action.id, action.payload);
      return copy3;
    default:
      return state;
  }
}

const mode = function(state = "edit", action) {
  switch(action.type) {
    case types.SET_DISPLAY_MODE:
      return action.mode;
    default:
      return state;
  }
}

const cart = combineReducers({
    items,
    servings,
    mode,
});

export default cart;
