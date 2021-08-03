const functions = require("firebase-functions");

const express=require("express");
const cors=require("cors");
const { response } = require("express");
const stripe =require("stripe")('sk_test_51JJvzlSFPDKQkABb5ko8OPqRuJJPqw9AhJpYX3YG3fHTK0Tt1IepMGTxX9n0NOjqXLkPNjT0LcVJaQOCrNMwSJWR006sGLzCzE')
//api

//App config
const app=express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());


  //api routes
  app.get('/',(request,response)=>response.status(200).send('hello world'))
  app.post('/payments/create',async (request,response)  => {
      const total=request.query.total;
      console.log("Payment request recieved  for this ammount",total);

      const paymentIntent=await stripe.paymentIntents.create({
          amount:total,
          currency:'usd',
      });
      response.status(201).send({
          clientSecret:paymentIntent.client_secret,
      });
       
  });

  //listen command
  exports.api= functions.https.onRequest(app);

  //http://localhost:5001/clone-f9270/us-central1/api