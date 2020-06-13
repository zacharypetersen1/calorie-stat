import React from "react";

export default function GraphElement(props) {
  return (
    <div 
      className="graph-element" 
      style={{"height": (props.percent*100).toString() + "%", "background-color": props.color}}
    >
      {props.name}
    </div>
  )
}
