import React from "react";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const foodCache = useSelector((state) => state.search.foodCache);
  const searchResultCache = useSelector((state) => state.search.searchResultCache);
  const lastQuery = useSelector((state) => state.search.lastQuery);

  return (
    <ul>
      {searchResultCache[lastQuery].map((foodId) => (
        <li key={foodId}>
          <span>{foodCache[foodId].description}</span>
          <span style={{ marginLeft: "10px" }}>{foodCache[foodId].brandOwner}</span>
        </li>
      ))}
    </ul>
  );
}
