import { combineReducers } from "redux";
import search from "./search";
import cart from "./cart";

const root = combineReducers({
  search,
  cart,
});
export default root;
