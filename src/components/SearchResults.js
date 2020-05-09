import React from "react";
import { useSelector } from "react-redux";
import { handleLoadMore } from "../scripts/eventHandlers";
import Button from "react-bootstrap/Button";
import SearchResult from "./SearchResult";

export default function SearchResults() {
  const lastQuery = useSelector((state) => state.search.lastQuery);
  const searchResults = useSelector((state) => state.search.searchResultCache[lastQuery]);
  const totalHits = useSelector((state) => state.search.totalHits[lastQuery]);

  return (
    <div className="search-results-wrapper">
      <div className="search-results-container">
        {searchResults.map((foodId) => (
          <SearchResult foodId={foodId} />
        ))}
        {searchResults.length < totalHits ? <Button variant="outline-secondary" className="load-more-button" onClick={() => handleLoadMore()}>Load More Results</Button> : null}
      </div>
    </div>
  );
}
