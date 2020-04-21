import { getFoodsAsync } from './async';
import { setSearchResults, setOldSearchQuery } from '../actions/actions';

export function trySearch(newQuery, oldQuery, dispatch) {
  if(newQuery !== oldQuery && newQuery !== '') {
    getFoodsAsync(newQuery, dispatch)
    .then( data => {
      dispatch(setSearchResults(data.foods));
      dispatch(setOldSearchQuery(newQuery));
    });
  }
}