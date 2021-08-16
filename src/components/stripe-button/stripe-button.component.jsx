import React from "react";

import StripeCheckout from "react-stripe-checkout";

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JP0fNF1YfnYLf7owdQoJ9oWwAIzWQbQ50QGJupW3j66M8m5Yl8IVSQyusd1IvEBa9jVonSQ6unX2udnIdk4HETT00YpCUESCf";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay With Card 💳"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now 💳"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
