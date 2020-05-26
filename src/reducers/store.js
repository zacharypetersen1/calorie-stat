import { createStore, combineReducers } from "redux";
import search from "./search";
import cart from "./cart";

const root = combineReducers({
  search,
  cart,
});

let store = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
