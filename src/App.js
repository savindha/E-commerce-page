import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-andsign-up/sign-in-andsign-up.component';
import { auth } from './firebase/firebase.util'



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }

  unsubscrisdfsfbeFromAuth = null

  componentDidMount() {
    this.unsubscrisdfsfbeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

    })

  }

  componentWillUnmount() {
    this.unsubscrisdfsfbeFromAuth()
  }

  render() {
    return (
      <div >
        <Header currentUser= {this.state.currentUser} />
        <Switch>
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>

      </div>
    );

  }
}


export default App;
