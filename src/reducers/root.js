import { combineReducers } from "redux";
import search from "./searchReducers";
import cart from "./cartReducers";

const root = combineReducers({
  search,
  cart,
});
export default root;
