import React, { useEffect } from 'react'
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { selectCurrentUser } from './redux/user/user.selector'
import { setCurrentUser } from './redux/user/user.actions'

const App = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => selectCurrentUser(state))
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }))
        });

      }
      else {
        dispatch(setCurrentUser(userAuth))
      }

    })
    return () => {

      unsubscribeFromAuth();
    }
  }, [dispatch])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
