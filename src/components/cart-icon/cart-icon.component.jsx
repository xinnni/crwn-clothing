import React, { useContext } from "react";
import { Context } from "../../Context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

export default function CartIcon() {
  const { ToggleCart, cartItems } = useContext(Context);

  return (
    <div className="cart-icon" onClick={ToggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
}
// {
//   cartItems.length;
// }
