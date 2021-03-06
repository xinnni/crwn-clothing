import React, { useContext } from "react";
import { Context } from "../../../Context";

import "./checkout.styles.scss";

import CheckoutItem from "../../checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";

export default function CheckoutPage() {
  const { cartItems, total } = useContext(Context);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        🧨 If use the following test credit card for payments,
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - cvv: 123 🧨
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
}
