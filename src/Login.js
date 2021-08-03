import React ,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();

        //some fancy firebase 
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    const createAccount =e=>{
        e.preventDefault();
        //do some fancy firebase register

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //it successfully created new user with email and password 
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
    
    .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
        <Link to='/'>
        <img  className="login_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'  alt="" />
            
        </Link>
        <div className="login_container">
        <h1>Sign-in</h1>
        <form>
        <h5>Email</h5>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type="password"  value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <button className="loginSigninButton" type="submit" onClick={signIn}>Sign In</button>
        </form>
        <p>By signing-in you agree to the Amazon Fake CLONE condition of Use & Sale.Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
        <button onClick={createAccount} className="createAccount">Create Your Amazon Account</button>
        
        </div>
        </div>
    )
}

export default Login
