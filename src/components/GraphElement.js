import React from "react";
import { useSelector } from "react-redux";

export default function GraphElement(props) {
  const hues = useSelector((state) => state.foods.hues);
  console.log(hues.get(props.id));
  return (
    <div 
      className="graph-element" 
      style={{
        "height": (props.percent*100).toString() + "%", 
        "background-color": `hsl(${hues.get(props.id)}, 50%, 60%)`
      }}
    >
      {props.name}
    </div>
  )
}
