export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToAdd.name
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// export const removeFromCart = (cartItems, cartItemToRemove) => {
//   const existionCartItem = cartItems.find(
//     (cartItem) => cartItem.name === cartItemToRemove.name
//   );

//   if (existionCartItem.quantity === 1) {
//     return cartItems.filter(
//       (cartItem) => cartItem.name != cartItemToRemove.name
//     );
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.name === cartItemToRemove.name
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

/*
export const saveCart = (cartItems) => {
  window.localStorage.setItem("MyCART", JSON.stringify(cartItems));
};
*/
