import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrimentServings, servingsFormChange } from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import classnames from "classnames";

export default function CartItem(props) {
  const food = useSelector((state) => state.foods.cache[props.id]);
  const servings = useSelector((state) => state.cart.servings.get(props.id));
  const hasLoadedNutrition = useSelector((state) => state.foods.nutrition.get(props.id).isLoaded);
  const displayMode = useSelector((state) => state.cart.mode);
  const hues = useSelector((state) => state.foods.hues);
  const dispatch = useDispatch();
  
  return (
    <div 
      className={ classnames("cart-item", {"cart-item-fixed": displayMode !== "edit"}) }
      style={ {
        "backgroundColor": `hsl(${hues.get(props.id)}, 50%, 60%`,
        "height": displayMode === "edit" ? "auto" : props.percent + "%",
      } }
    >
      <div className="cart-item-remove" onClick={ () => dispatch(removeFromCart(props.id)) }>
        <FontAwesomeIcon icon={ faTimes } />
      </div>
      <div className="cart-item-text">
        {food.description}
      </div>
      { hasLoadedNutrition ?
        <div className="cart-item-servings">
          <Button
            className="servings-button"
            onClick={ () => dispatch(incrimentServings(props.id, -1)) }
          >
            <FontAwesomeIcon icon={ faMinus } />
          </Button>
          <FormControl 
            className="servings-form"
            value={ servings }
            tabIndex="4"
            onClick={ (e) => e.target.select() }
            onChange={ (e) => dispatch(servingsFormChange(props.id, e.target.value, e.target))}
          />
          <Button
            className="servings-button"
            onClick={ () => dispatch(incrimentServings(props.id, 1)) }
          >
            <FontAwesomeIcon icon={ faPlus } />
          </Button>
        </div>
        : <span>Loading</span>
      }
    </div>
  )
}
