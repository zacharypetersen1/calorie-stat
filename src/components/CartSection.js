import React from "react"
import Simplebar from "simplebar-react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


export default function CartSection() {
  const itemList = useSelector((state) => state.cart.itemList);

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
      <Simplebar className="cart" autoHide={false}>
        {itemList.map(id => <CartItem key={id} id={id} />)}
      </Simplebar>
    </div>
  )
}
