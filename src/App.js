import React from 'react';
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";

//CSS
import './App.css';

//COMPONENTS
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
