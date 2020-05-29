import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../actions/actions";
import Button from "react-bootstrap/Button";
import SearchResult from "./SearchResult";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export default function SearchResults() {
  const dispatch = useDispatch();
  const lastQuery = useSelector((state) => state.search.lastQuery);
  const searchResults = useSelector((state) => state.search.resultCache[lastQuery]);
  const totalHits = useSelector((state) => state.search.totalHits[lastQuery]);

  if (lastQuery === '') {
    return <p>TODO add search message here</p>;
  }
  return (
    searchResults === undefined ? null :
    <SimpleBar autoHide={false} className="section-scroll">
      {searchResults.map((foodId) => (
        <SearchResult key={foodId} id={foodId} />
      ))}
      {searchResults.length < totalHits ? 
        <Button 
          variant="outline-secondary"
          className="load-more-button"
          tabIndex="3"
          onClick={() => dispatch(fetchSearchResults(lastQuery, searchResults.length / 20 + 1))}>Load More Results
        </Button> : null}
    </SimpleBar>
  );
}
