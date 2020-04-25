import React from "react";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const foodCache = useSelector((state) => state.search.foodCache);
  const lastQuery = useSelector((state) => state.search.lastQuery);
  const searchResults = useSelector((state) => state.search.searchResultCache[lastQuery]);
  const totalHits = useSelector((state) => state.search.totalHits[lastQuery]);

  return (
    <div>
      <ul>
        {searchResults.map((foodId) => (
          <li key={foodId}>
            <span>{foodCache[foodId].description}</span>
            <span style={{ marginLeft: "10px" }}>{foodCache[foodId].brandOwner}</span>
          </li>
        ))}
      </ul>
      {searchResults.length < totalHits ? <button>Load More Results</button> : null}
    </div>
  );
}
