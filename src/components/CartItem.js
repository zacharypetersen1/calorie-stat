import React from "react";
import { useSelector } from "react-redux";

export default function CartItem(props) {
  const foodCache = useSelector((state) => state.search.foodCache);
  
  return (
    <div>
      {foodCache[props.id].description}
    </div>
  )
}
