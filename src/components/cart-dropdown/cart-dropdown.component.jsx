import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

export default function CartDropdown() {
  const { cartItems, ToggleCart } = useContext(Context);
  const items = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          💸 {item.price} X {item.quantity}
        </span>
      </div>
    </div>
  ));
  console.log(items);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items
        ) : (
          <span className="empty-message">Your cart is empty 🙏🏻</span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton onClick={ToggleCart}>GO TO CHECKOUT</CustomButton>
      </Link>
    </div>
  );
}
