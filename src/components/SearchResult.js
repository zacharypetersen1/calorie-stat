import React from "react";
import { useSelector } from "react-redux";

export default function SearchResult(props) {
  const foodCache = useSelector((state) => state.search.foodCache);

  return (
    <div key={props.foodId} className="search-result">
      <div className="search-result-check-container">
        <span className="custom-check-box checked" />
      </div>
      <div>
        <span>{foodCache[props.foodId].description}</span>
        <span className="search-result-brand">{foodCache[props.foodId].brandOwner}</span>
      </div>
    </div>
  )
}
