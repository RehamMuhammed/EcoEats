import React from 'react';
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
      <div className='container'>
        <div className='header-content text-center flex flex-column'>
          <h1 className='text-uppercase header-title'>Welcome to EcoEats</h1>
          <p className='text-lead'>The place where you can donate food for poor people, also buy any food with very good offers. Welcome to our website and we're waiting for your donations to the charities.</p>
          <a href="about" className='btn header-btn'>
            <FaPaperPlane /> <span>Get Started</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header