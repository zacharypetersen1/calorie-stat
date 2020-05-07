import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useSelector } from "react-redux";

export default function SearchSection() {
  const lastQuery = useSelector((state) => state.search.lastQuery);

  return (
    <div className="search-section">
      <SearchBar />
      {lastQuery === '' ? <p>TODO add search message here</p> : <SearchResults />}
    </div>
  );
}
