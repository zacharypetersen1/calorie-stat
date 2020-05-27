import React from "react"
import SimpleBar from "simplebar-react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


export default function CartSection() {
  const items = useSelector((state) => state.cart.items);

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
      <SimpleBar autoHide={false} className="section-scroll cart">
        {[...items].map(id => <CartItem key={id} id={id} />)}
      </SimpleBar>
    </div>
  )
}
