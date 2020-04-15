import React from 'react';
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";

//CSS
import './App.css';

//PAGES
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

//COMPONENTS
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
