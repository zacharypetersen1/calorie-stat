import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { handleServingsFormChange, handleServingsChange } from "../scripts/eventHandlers";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function CartItem(props) {
  const foodCache = useSelector((state) => state.search.foodCache);
  const servings = useSelector((state) => state.cart.servingsMap.get(props.id));
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
        <Button
          className="servings-button"
          onClick={ () => handleServingsChange(props.id, servings - 1) }
        >
          <FontAwesomeIcon icon={ faMinus } />
        </Button>
        <FormControl 
          className="servings-form"
          value={ servings }
          tabIndex="4"
          onClick={ (e) => e.target.select() }
          onChange={ (e) => handleServingsFormChange(props.id, e.target.value, e.target)}
        />
        <Button
          className="servings-button"
          onClick={ () => handleServingsChange(props.id, servings + 1) }
        >
          <FontAwesomeIcon icon={ faPlus } />
        </Button>
      </div>
    </div>
  )
}
