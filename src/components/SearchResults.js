import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import LoadMoreButton from "./LoadMoreButton";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export default function SearchResults() {
  const lastQuery = useSelector((state) => state.search.lastQuery);
  const searchResults = useSelector((state) => state.search.resultCache[lastQuery]);
  const totalHits = useSelector((state) => state.search.totalHits[lastQuery]);

  if (lastQuery === '') {
    return <p>TODO add search message here</p>;
  }
  return (
    <SimpleBar autoHide={false} className="section-scroll">
      { searchResults.map( (foodId) => (<SearchResult key={foodId} id={foodId} />) ) }
      { searchResults.length < totalHits ? <LoadMoreButton /> : null }
    </SimpleBar>
  );
}
