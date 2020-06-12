import React from "react";
import { useSelector } from "react-redux";
import GraphElement from "./GraphElement";

export default function OutcomeSection() {
  const items = useSelector((state) => state.cart.items);
  const foodCache = useSelector((state) => state.foods.cache);
  const nutrition = useSelector((state) => state.foods.nutrition);
  const servings = useSelector((state) => state.cart.servings);

  const nutrientType = "sugar";
  const totalNutrient = [...items].reduce(
    (accumulator, id) => accumulator + parseFloat(nutrition.get(id)[nutrientType]) * servings.get(id), 0);

  return (
    <div className="outcome-section">
      <div className="graph-container">
        {
          [...items].map((id) => {
            const nutrientAmount = parseFloat((nutrition.get(id)[nutrientType]) * servings.get(id));
            return <GraphElement 
              key={id} 
              name={foodCache[id].description}
              percent={nutrientAmount > 0 ? nutrientAmount / totalNutrient : 0}
            />
          })
        }
      </div>
    </div>
  )
}
