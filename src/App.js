import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import HomePage from "../src/components/pages/homepage/homepage.component";
import ShopPage from "../src/components/pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
