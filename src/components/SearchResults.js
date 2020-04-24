import React from "react";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const cachedResults = useSelector((state) => state.search.cachedResults);
  const lastQuery = useSelector((state) => state.search.lastQuery);

  return (
    <ul>
      {cachedResults[lastQuery].map((result) => (
        <li key={result.fdcId}>
          <span>{result.description}</span>
          <span style={{ marginLeft: "10px" }}>{result.brandOwner}</span>
        </li>
      ))}
    </ul>
  );
}
