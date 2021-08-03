import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home_container">
        <img  className=" home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG" alt=""/>

        <div className="home_row">
        <Product  
        title="Elite Ninja Half Sleeve T-Shirt" 
        price={19.89} 
        image='https://images.bewakoof.com/original/elite-ninja-half-sleeve-t-shirt-men-s-printed-t-shirts-386570-1627650824.jpg?tr=q-100' 
         rating={5} />
        <Product
        title="Jet Black Round Neck 3/4th Sleeve T-Shirt" 
        price={29.99} 
        image='https://images.bewakoof.com/original/jet-black-round-neck-3-4th-sleeve-t-shirt-women-s-plain-round-neck-3-4-sleeve-t-shirts-105769-1560427977.jpg?tr=q-100' 
         rating={4}/>
       
        </div>
        <div className="home_row">
        
        <Product
        title="Dental Tools, 10 Pack Professional Plaque Remover Teeth Cleaning Tools Set, Stainless Steel Oral Care" 
        price={14.97} 
        image='https://www.123dentist.com/wp-content/uploads/2017/06/dental-tools-1.jpg' 
         rating={5}/>
        <Product
        title="Mundu Munduna iPhone 12 Mobile Cover" 
        price={26.90} 
        image='https://images.bewakoof.com/original/mundu-munduna-iphone-12-mobile-cover-iphone-12-mobile-covers-309902-1607428831.jpg?tr=q-100' 
         rating={3}/>
        <Product
        title="Log out Adjustable Men's Slider" 
        price={102.38} 
        image='https://images.bewakoof.com/original/log-out-adjustable-men-s-slider-sliders-384126-1627716186.jpg?tr=q-100' 
         rating={5}/>
     </div>
        <div className="home_row">
        <Product
        title="The lean startup" 
        price={299} 
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
         rating={3}/>
       
        </div>
        </div>
            
        </div>
    )
}

export default Home
