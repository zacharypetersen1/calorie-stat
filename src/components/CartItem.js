import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

export default function CartItem(props) {
  const foodCache = useSelector((state) => state.search.foodCache);
  
  return (
    <div className="cart-item">
      <Button className="cart-item-remove" varient="danger">
        X
      </Button>
      <div className="cart-item-text">
        {foodCache[props.id].description}
      </div>
      <div className="cart-item-servings">
        serv
      </div>
    </div>
  )
}
