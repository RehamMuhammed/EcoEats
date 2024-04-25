import React from 'react';
import "./BuyHome.css";
import { FaPaperPlane } from "react-icons/fa";

const BuyHome = () => {
  return (
    <header className='buy flex flex-center flex-column'>
      <div className='container-buy text-center'>
        <div className='buy-content text-center flex flex-column align-items-center'>
          <h1 className='text-uppercase buy-title'>Welcome to EcoEats</h1>
          <br></br>
          <p className='text-lead'>Here, you can buy any food with very good offers. Welcome to our website and we're waiting for your donations to the charities.</p><br></br><br></br><br></br><br></br>
          <a href="store" className='btn buy-btn'>


            <FaPaperPlane /> <span> Let's Shop</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default BuyHome;