import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "../src/components/pages/homepage/homepage.component";
import ShopPage from "../src/components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "../src/firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
