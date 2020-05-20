import { getFoodsAsync } from "./async";
import { cacheSearchResults, loadCachedResults, changeServings } from "../actions/actions";
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
  const search = store.getState().search;
  const pageNumber = (search.searchResultCache[search.lastQuery].length / 50) + 1;
  getFoodsAsync(search.lastQuery, pageNumber).then((data) => {
    store.dispatch(cacheSearchResults(data.foods, search.lastQuery, data.totalHits));
  });
}

export function handleServingsOnChange(id, str) {
  if(str.match(/^\d{0,2}$/)) {
    const newServings = str === "" ? 0 : parseInt(str);
    store.dispatch(changeServings(id, newServings));
  }
}
