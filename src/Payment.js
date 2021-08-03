import { useElements, useStripe ,CardElement } from '@stripe/react-stripe-js';
import React,{useState,useEffect} from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link ,useHistory} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import {getCartTotal} from './Reducer';
import axios from './axios';
import {db} from './firebase';

function Payment() {
    const [{cart,user},dispatch]=useStateValue();
    const history=useHistory();
    

    const stripe=useStripe();
    const elements=useElements();
    
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");

    const [error,setError]= useState(null);
    const [disabled,setDisabled]=useState(true);
    const [clientSecret,setClientSecret]=useState(true);

    useEffect(() => {
        //generate the special stripe secret which allow us to charge a customer

        const getClientSecret =async ()=>{
            const response =await axios({
                //stripes exppects the total in a currencies subnits
                method:'post',
                url:`/payments/create?total=${getCartTotal(cart)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])
    console.log('THE  SECRET IS ',clientSecret);
    console.log('Hyyyy',user)

    const handleSubmit=async (event)=>{
        //do all the fancy stripe
        event.preventDefault();
        setProcessing(true);

        //const payload=await stripe
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                       card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //payment intent=payment confirmation

         /*   db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart:cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })*/

            setSucceeded(true);
            setError(null)
            setProcessing(false)


            dispatch({
                type:'EMPTY_CART'
            })

            history.replace('/orders')
        })


    }
    const handleChange=event=>{
        //listen for changes in card element 
        //and display any errors as the customer types in their card details 
        setDisabled(event.empty);
        setError(event.error?event.error.message:"");

    }
    return (
        <div className="payment">
        <div className="payment_container">
        <h1>Checkout (<Link to="/checkout">{cart.length} items)</Link></h1>
        {/*paymantsection- delivey address*/}
        <div className="payment_section">
        <div className="payment_title">
        <h3>Delivery Address</h3>
        </div>
        <div className="payment_address">
        <p>{user?.email}</p>
        <p>123 React Lane</p>
        <p>Los Angeles,California</p>
        </div>

        </div>
        {/*payment section- review items */}
        <div className="payment_section">
        <div className="payment_title">
        <h3>Review items and delivery</h3>
        
        </div>
        <div className="payment_items">
        {cart.map(item=>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
        ))}
        </div>
        
        </div>
        {/*payment section - payment method */}
        <div className="payment_section">
        <div className="payment_title">
        <h3>Payment method</h3>
        </div>
        <div className="payment_details">
        {/*Stripe magic will go*/}
        <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />
        <div className="payment_priceContainer">
        <CurrencyFormat
        renderText={(value)=>(
            <>
              <h3>Order Totals: {value}</h3>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thausandSeparator={true}
        prefix={"$"} 
        />

        <button disabled={processing || disabled || succeeded}>
        <span>{processing?<p>Processing</p>:"Buy Now"}</span>
        </button>
        </div>
        {/*error */}
        {error && <div>{error}</div>}
        </form>
        </div>
        
        </div>
        
        </div>
            
        </div>
    )
}

export default Payment;
