import { getFoodsAsync } from "./async";
import { /*cacheSearchResults, loadCachedResults,*/ changeServings } from "../actions/actions";
import store from "../reducers/store";

export function handleSearch() {

}

export function handleLoadMore() {
  /*const search = store.getState().search;
  const pageNumber = (search.resultCache[search.lastQuery].length / 50) + 1;
  getFoodsAsync(search.lastQuery, pageNumber).then((data) => {
    store.dispatch(cacheSearchResults(data.foods, search.lastQuery, data.totalHits));
  });*/
}

export function handleServingsFormChange(id, str, target) {
  if(str.match(/^\d{0,2}$/)) {
    const newServings = str === "" ? 0 : parseInt(str);
    store.dispatch(changeServings(id, newServings));
  }
  if(str === "") {
    console.log("ran");
    setTimeout(() => target.select(), 0);
  }
}

export function handleServingsChange(id, newServings) {
  if(newServings >= 0 && newServings <= 99) {
    store.dispatch(changeServings(id, newServings));
  }
}
