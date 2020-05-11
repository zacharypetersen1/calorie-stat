import React from "react";
import { useSelector } from "react-redux";

export default function SearchResult(props) {
  const foodCache = useSelector((state) => state.search.foodCache);

  return (
    <div key={props.foodId} className="search-result">
      <div className="search-result-check-container">
        <input type="checkbox" className="search-result-check" />
      </div>
      <div className="search-result-info-container">
        <span>{foodCache[props.foodId].description}</span>
        <span className="search-result-brand">{foodCache[props.foodId].brandOwner}</span>
      </div>
    </div>
  )
}
