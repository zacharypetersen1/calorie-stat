import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, doAddToCart } from "../actions/actions";
import classNames from "classnames";

export default function SearchResult(props) {
  const dispatch = useDispatch();
  const food = useSelector((state) => state.foods.cache[props.id]);
  const isInCart = useSelector((state) => state.cart.items.has(props.id));

  return (
    <div
      onClick={ 
        ()=>dispatch(isInCart ? removeFromCart(props.id) : doAddToCart(props.id))
      }
      className={classNames("search-result", {"checked": isInCart})}
    >
      <div className="search-result-check-container">
        <span className="custom-check-box" />
      </div>
      <div className="search-result-text">
        <span>{food.description}</span>
        <span className="search-result-brand">{food.brandOwner}</span>
      </div>
    </div>
  )
}
