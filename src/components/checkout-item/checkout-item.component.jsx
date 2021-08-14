import React, { useContext } from "react";
import { Context } from "../../Context";

import "./checkout-item.styles.scss";

export default function CheckoutItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#9986;</div>
    </div>
  );
}
