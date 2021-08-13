import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import dummyCollections from "./static/dummyCollections";
import { addItemToCart, saveCart } from "./components/cart-items/cart-utils";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  /* useEffect(() => {
    const myCart = JSON.parse(localStorage.getItem("MyCART"));

    setCartItems(myCart ? myCart : []);
  }, []);
  */

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
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
