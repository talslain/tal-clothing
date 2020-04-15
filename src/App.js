import React from 'react';
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";

//CSS
import './App.css';

//COMPONENTS
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div className="hats-page">
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
