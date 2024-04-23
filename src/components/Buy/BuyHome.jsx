import React from 'react';
import "./BuyHome.css";
import { FaPaperPlane } from "react-icons/fa";

const BuyHome = () => {
  return (
    <header className='buy flex flex-center flex-column'>
      <div className='container-buy'>
        <div className='buy-content text-center flex flex-column'>
          <h1 className='text-uppercase buy-title'>Welcome to EcoEats</h1>
          <p className='text-lead'>Here, you can buy any food with very good offers. Welcome to our website and we're waiting for your donations to the charities.</p>

          <a href="store" className='btn buy-btn'>


            <FaPaperPlane /> <span> Let's Shop</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default BuyHome;