import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchSection() {
  return (
    <div className="search-section">
      <SearchBar />
      <SearchResults />
    </div>
  );
}
