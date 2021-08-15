import React, { useContext } from "react";
import { Context } from "../../Context";

import "./checkout-item.styles.scss";

export default function CheckoutItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  const { clearItem, removeFromCartItems, addCartItems } = useContext(Context);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeFromCartItems(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addCartItems(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={(e) => clearItem(name)}>
        &#9986;
      </div>
    </div>
  );
}
