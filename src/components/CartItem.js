import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CartItem(props) {
  const foodCache = useSelector((state) => state.search.foodCache);
  const dispatch = useDispatch();
  
  return (
    <div className="cart-item">
      <div className="cart-item-remove" onClick={ () => dispatch(removeFromCart(props.id)) }>
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
