import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{cart},dispatch]=useStateValue();
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
        <div className="header_option">
          <span className="header_option1">Hello guest</span>
          <span className="header_option2">Sign in</span>
        </div>

        <div className="header_option">
        <span className="header_option1">Returns</span>
        <span className="header_option2">& Orders</span>
        </div>

        <div className="header_option">
        <span className="header_option1">Your</span>
        <span className="header_option2">Prime</span>
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
