import React from "react";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const results = useSelector((state) => state.search.results);

  return (
    <ul>
      {results.map((result) => (
        <li key={result.fdcId}>
          <span>{result.description}</span>
          <span style={{ marginLeft: "10px" }}>{result.brandOwner}</span>
        </li>
      ))}
    </ul>
  );
}
