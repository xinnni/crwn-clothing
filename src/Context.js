import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [hidden, setHidden] = useState(true);

  /* 로그인 유저 */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
