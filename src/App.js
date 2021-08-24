import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import { Route, Switch, Link } from 'react-router-dom'

const HatsPage = (props) => {
  const {history} =props
  console.log(history)
  return (
    <div>
      <Link to="/">GO TO HOME PAGE</Link>
      <h1>THis is the test Page React</h1>
    </div>

  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route exact path="/" component={HomePage} />

      </Switch>

    </div>
  );
}

export default App;
