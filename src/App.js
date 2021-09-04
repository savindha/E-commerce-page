import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Switch, Link } from 'react-router-dom'



function App() {
  return (
    <div >
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
