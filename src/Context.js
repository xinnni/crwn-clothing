import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <Context.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
