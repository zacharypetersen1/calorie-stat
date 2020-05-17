import { combineReducers } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const itemSet = function(state = new Set(), action) {
  switch(action.type) {
    case ADD_TO_CART:
      let addState = new Set(state);
      addState.add(action.payload);
      return addState;
    case REMOVE_FROM_CART:
      let remState = new Set(state);
      remState.delete(action.payload);
      return remState;
    default: 
      return state;
  }
};

const itemList = function(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(id => id !== action.payload);
    default: 
      return state;
  }
};

const cart = combineReducers({
    itemSet,
    itemList,
});

export default cart;
