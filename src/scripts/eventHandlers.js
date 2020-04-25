import { getFoodsAsync } from "./async";
import { cacheSearchResults, loadCachedResults } from "../actions/actions";
import store from "../reducers/store";

export function handleSearch() {
  const search = store.getState().search;

  if (search.query !== search.lastQuery && search.query !== "") {
    if(search.searchResultCache.hasOwnProperty(search.query)) {
      store.dispatch(loadCachedResults(search.query));
    }
    else {
      getFoodsAsync(search.query).then((data) => {
        store.dispatch(cacheSearchResults(data.foods, search.query));
      });
    }
  }
}
