import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/pages/homepage.component.jsx";

const HatsPage = () => {
  return (
    <div>
      <h1>hats</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
