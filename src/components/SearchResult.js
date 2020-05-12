import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartItem } from "../actions/actions";
import classNames from "classnames";

export default function SearchResult(props) {
  const dispatch = useDispatch();
  const foodCache = useSelector((state) => state.search.foodCache);
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.has(props.foodId);

  return (
    <div key={props.foodId} onClick={ ()=>dispatch(toggleCartItem(props.foodId)) } className="search-result">
      <div className="search-result-check-container">
        <span className={classNames("custom-check-box", {"checked": isInCart})} />
      </div>
      <div>
        <span>{foodCache[props.foodId].description}</span>
        <span className="search-result-brand">{foodCache[props.foodId].brandOwner}</span>
      </div>
    </div>
  )
}
