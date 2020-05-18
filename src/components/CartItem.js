import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CartItem(props) {
  const foodCache = useSelector((state) => state.search.foodCache);
  
  return (
    <div className="cart-item">
      <div className="cart-item-remove">
        <FontAwesomeIcon icon={ faTimes } />
      </div>
      <div className="cart-item-text">
        {foodCache[props.id].description}
      </div>
      <div className="cart-item-servings">
        serv
      </div>
    </div>
  )
}
