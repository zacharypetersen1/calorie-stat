import React from "react";
import { useSelector } from "react-redux";
import GraphElement from "./GraphElement";

export default function OutcomeSection() {
  const items = useSelector((state) => state.cart.items);
  const foodCache = useSelector((state) => state.foods.cache);

  return (
    <div className="outcome-section">
      <div className="graph-container">
        {
          [...items].map((id) => 
            <GraphElement key={id} name={foodCache[id].description} />
          )
        }
      </div>
    </div>
  )
}
