import React from "react";
import { useSelector } from "react-redux";
import FormCheck from 'react-bootstrap/FormCheck'

export default function SearchResult(props) {
  const foodCache = useSelector((state) => state.search.foodCache);

  return (
    <div key={props.foodId} className="search-result">
      {/*<FormCheck inline className="search-result-check" />*/}
      <input type="checkbox" className="search-result-check" />
      <span>{foodCache[props.foodId].description}</span>
      <span className="search-result-brand">{foodCache[props.foodId].brandOwner}</span>
    </div>
  )
}
