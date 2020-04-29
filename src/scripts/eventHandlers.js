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
        store.dispatch(cacheSearchResults(data.foods, search.query, data.totalHits));
      });
    }
  }
}

export function handleLoadMore() {
  console.log("hi");
  const search = store.getState().search;
  const pageNumber = (search.searchResultCache[search.lastQuery].length / 50) + 1;
  getFoodsAsync(search.lastQuery, pageNumber).then((data) => {
    store.dispatch(cacheSearchResults(data.foods, search.lastQuery, data.totalHits));
  });
}
