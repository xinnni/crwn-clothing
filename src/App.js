import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "../src/components/pages/homepage/homepage.component";
import ShopPage from "../src/components/pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
