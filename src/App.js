import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "../src/components/pages/homepage/homepage.component";
import ShopPage from "../src/components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
