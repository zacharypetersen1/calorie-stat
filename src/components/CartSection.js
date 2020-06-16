import React from "react"
import SimpleBar from "simplebar-react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


export default function CartSection() {
  const items = useSelector((state) => state.cart.items);
  const nutrition = useSelector((state) => state.foods.nutrition);
  const servings = useSelector((state) => state.cart.servings);
  const displayMode = useSelector((state) => state.cart.mode);
  const isEdit = displayMode === "edit";
  let cartItems;

  if(isEdit) {
    cartItems = [...items].map((id) => <CartItem key={id} id={id} percent={0} />);
  } else {
    const nutrientTotal = [...items].reduce(
      (accumulator, id) => accumulator + parseFloat(nutrition.get(id)[displayMode]) * servings.get(id), 0);

    cartItems = [...items].map((id) => 
      <CartItem
        key={id}
        id={id}
        percent={ (parseFloat(nutrition.get(id)[displayMode]) * servings.get(id) / nutrientTotal) * 100 }
      />
    );
  }

  return (
    <div className="cart-section">
      <div className="cart-header">
        <div className="cart-name">
          Name
        </div>
        <div className="cart-servings">
          Servings
        </div>
      </div>
      {
        isEdit ?
        <SimpleBar autoHide={false} className="section-scroll cart"> {cartItems} </SimpleBar>
        : <div className="section-scroll cart"> {cartItems} </div>
      }

    </div>
  )
}
