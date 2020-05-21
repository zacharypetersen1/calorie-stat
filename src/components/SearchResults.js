import React from "react";
import { useSelector } from "react-redux";
import { handleLoadMore } from "../scripts/eventHandlers";
import Button from "react-bootstrap/Button";
import SearchResult from "./SearchResult";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export default function SearchResults() {
  const lastQuery = useSelector((state) => state.search.lastQuery);
  const searchResults = useSelector((state) => state.search.searchResultCache[lastQuery]);
  const totalHits = useSelector((state) => state.search.totalHits[lastQuery]);

  if (lastQuery === '') {
    return <p>TODO add search message here</p>;
  }
  return (
    <SimpleBar autoHide={false} className="section-scroll">
      {searchResults.map((foodId) => (
        <SearchResult key={foodId} id={foodId} />
      ))}
      {searchResults.length < totalHits ? 
        <Button 
          variant="outline-secondary"
          className="load-more-button"
          tabIndex="3"
          onClick={() => handleLoadMore()}>Load More Results
        </Button> : null}
    </SimpleBar>
  );
}
