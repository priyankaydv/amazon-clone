import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{cart,user},dispatch]=useStateValue();

  const handleAuthentication =() =>{
    if(user){
      auth.signOut();
    }
  }

    return (
        <div className='header'>
        <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        
        <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
        <Link to={!user && '/Login'}>
        <div className="header_option" onClick ={handleAuthentication}>
          <span className="header_option1">Hello {!user?'Guest':user.email}</span>
          <span className="header_option2">{user? 'Sign Out':'Sign In'}</span>
          
        </div>
        </Link>

        <div className="header_option">
        <span className="header_option1">Returns</span>
        <span className="header_option2">& Orders</span>
       
        </div>

        <div className="header_option">
        
        <a href="https://www.primevideo.com/" className="header_options1">Your</a>
        <a href="https://www.primevideo.com/" className="header_options2">Prime</a>
        </div>

        <Link to="/Checkout">
        <div className="header_Basket"><LocalMallIcon/>
        <span className="header_option2 header_basketCount">{cart?.length}</span>
       
        </div>
        </Link>
        </div>
            
        </div>
    )
}

export default Header
