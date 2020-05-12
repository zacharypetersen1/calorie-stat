import { combineReducers } from "redux";
import { TOGGLE_CART_ITEM } from "../actions/types";

const items = function(state = new Set(), action) {
  switch(action.type) {
    case TOGGLE_CART_ITEM:
      let newState = new Set(state);
      if(newState.has(action.payload)) {
        newState.delete(action.payload);
      }
      else {
        newState.add(action.payload);
      }
      return newState;
    default: 
      return state;
  }
};

const cart = combineReducers({
    items,
});

export default cart;
