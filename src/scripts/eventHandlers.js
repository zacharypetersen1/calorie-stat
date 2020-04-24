import { getFoodsAsync } from "./async";
import { setSearchResults } from "../actions/actions";
import store from "../reducers/store";

export function handleSearch() {
  const search = store.getState().search;

  if (search.query !== search.lastQuery && search.query !== "") {
    getFoodsAsync(search.query).then((data) => {
      store.dispatch(setSearchResults(data.foods, search.query));
    });
  }
}
