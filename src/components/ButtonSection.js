import React from "react";
import DisplayModeButton from "./DisplayModeButton";

export default function ButtonSection() {
  return (
    <div className="button-section">
      <DisplayModeButton nutrient="edit" name="Edit" />
      <DisplayModeButton nutrient="calories" name="Calories" />
      <DisplayModeButton nutrient="sugar" name="Sugars" />
      <DisplayModeButton nutrient="carbohydrate" name="Carbohydrates" />
      <DisplayModeButton nutrient="protein" name="Proteins" />
      <DisplayModeButton nutrient="fat" name="Fats" />
      <DisplayModeButton nutrient="saturated_fat" name="Saturated Fats" />
      <DisplayModeButton nutrient="fiber" name="Fibers" />
    </div>
  )
}
