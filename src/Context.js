import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { dummyCollections } from "./static/dummyCollections";
import {
  addItemToCart,
  removeFromCart,
} from "./components/cart-items/cart-utils";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();
  const [allItems, setAllItems] = useState(dummyCollections);

  /* useEffect(() => {
    const myCart = JSON.parse(localStorage.getItem("MyCART"));

    setCartItems(myCart ? myCart : []);
  }, []);
  */

  /* 가격 */
  useEffect(() => {
    setTotal(
      cartItems.reduce(
        (accumalatedQuantity, cartItems) =>
          accumalatedQuantity + cartItems.quantity * cartItems.price,
        0
      )
    );
  }, [cartItems]);

  /* 로그인 유저 */

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  /* 장바구니 추가 */

  function addCartItems(newitems) {
    return setCartItems(addItemToCart(cartItems, newitems));
  }

  /* 장바구니 삭제 */

  function clearItem(name) {
    return setCartItems((prevItems) => {
      const items = prevItems.filter((item) => item.name !== name);
      return items;
    });
  }

  /* 장바구니 수량 추가 및 삭제 */

  function removeFromCartItems(newitems) {
    return setCartItems(removeFromCart(cartItems, newitems));
  }

  /* 카트 토글 */

  function ToggleCart() {
    setHidden((prevState) => !prevState);
  }

  return (
    <Context.Provider
      value={{
        currentUser,
        ToggleCart,
        hidden,
        setHidden,
        addCartItems,
        cartItems,
        total,
        clearItem,
        removeFromCartItems,
        allItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
