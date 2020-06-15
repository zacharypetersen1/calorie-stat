import React from "react";
import DisplayModeButton from "./DisplayModeButton";

export default function ButtonSection() {
  return (
    <div className="button-section">
      <DisplayModeButton nutrient={null} mode="Edit" />
      <DisplayModeButton nutrient="calories" mode="Calories" />
      <DisplayModeButton nutrient="sugar" mode="Sugars" />
      <DisplayModeButton nutrient="carbohydrate" mode="Carbohydrates" />
      <DisplayModeButton nutrient="protein" mode="Proteins" />
      <DisplayModeButton nutrient="fat" mode="Fats" />
      <DisplayModeButton nutrient="saturated_fat" mode="Saturated Fats" />
      <DisplayModeButton nutrient="fiber" mode="Fibers" />
      
    </div>
  )
}
