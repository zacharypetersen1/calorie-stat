import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/actions";
import classNames from "classnames";

export default function SearchResult(props) {
  const dispatch = useDispatch();
  const foodCache = useSelector((state) => state.search.foodCache);
  const itemSet = useSelector((state) => state.cart.itemSet);
  const isInCart = itemSet.has(props.id);

  return (
    <div
      onClick={ 
        ()=>dispatch(isInCart ? removeFromCart(props.id) : addToCart(props.id))
      }
      className="search-result"
    >
      <div className="search-result-check-container">
        <span className={classNames("custom-check-box", {"checked": isInCart})} />
      </div>
      <div>
        <span>{foodCache[props.id].description}</span>
        <span className="search-result-brand">{foodCache[props.id].brandOwner}</span>
      </div>
    </div>
  )
}
