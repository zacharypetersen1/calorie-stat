import { combineReducers } from "redux";
import search from "./searchReducers";

const root = combineReducers({
  search,
});
export default root;
