import React, { useContext } from "react";
import { Context } from "../../Context";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

export default function CartDropdown() {
  const { cartItems, ToggleCart } = useContext(Context);
  const items = cartItems.map((item) => (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          💸 {item.price} X {item.quantity}
        </span>
      </div>
    </div>
  ));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{items}</div>
      <CustomButton onClick={ToggleCart}>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
