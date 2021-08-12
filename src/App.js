import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Context } from "./Context";

import "./App.css";

import HomePage from "../src/components/pages/homepage/homepage.component";
import ShopPage from "../src/components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "../src/firebase/firebase.utils";

export default function App() {
  const { currentUser, setCurrentUser } = useContext(Context);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/signin">
          {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
        </Route>
      </Switch>
    </div>
  );
}
