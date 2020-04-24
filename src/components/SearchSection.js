import React from "react";
import SearchResults from "./SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../actions/actions";
import { handleSearch } from "../scripts/eventHandlers";

export default function SearchSection() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  return (
    <div>
      <label htmlFor="foodName">Food Name</label>
      <input
        type="text"
        value={query}
        id="foodName"
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        onKeyUp={(e) => {
          if (e.keyCode === 13) handleSearch();
        }}
      />
      <button type="button" onClick={() => handleSearch()}>
        Search
      </button>
      <SearchResults />
    </div>
  );
}
