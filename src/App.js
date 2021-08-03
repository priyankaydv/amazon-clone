import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import  Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter  as  Router  ,Switch, Route}  from 'react-router-dom';
import {auth} from './firebase';
import Payment from './Payment';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Order from './Order';
import CheckoutProduct from './CheckoutProduct';


const promise= loadStripe("pk_test_51JJvzlSFPDKQkABbCNCETP43xdqS1z0Me7eQDx1jMC52Z4hwYH9ZwKukbbwm2Rw81bhwfV1AdksSjIzwm9P3CeJz001OWJzoFG");


function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log('The user is  >>>',authUser);


      if(authUser){
        //user just logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  },[])
  return (
    <Router>
    <div className="App">
   
    <Switch>
    <Route path="/orders">
    <Header/>
     <Orders/>
    </Route>
    <Route path="/login">
     <Login />
    </Route>
    <Route path="/Checkout">
    <Header/>
   <Checkout/>
    </Route>
    <Route path="/payment">
    <Header/>
    <Elements stripe={promise}>
    <Payment />
    </Elements>
    </Route>
    <Route path="/">
    <Header/>
    <Home />
    </Route>
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
