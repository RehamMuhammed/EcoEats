  import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route  } from 'react-router-dom'; 
import logo from "../../images/logo.png";
// import Login  from '../Forms/LoginForm/Login'
// import SignUp from'../Forms/SignUpForm/SignUp';
// import BuyHome from'../Buy/BuyHome';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Navbar = ({toggle , setToggle}) => {
  const navigate = useNavigate() 
  const handleToggleChange=() =>{
    setToggle(!toggle);
    toggle ? navigate("/") :  navigate("/buy")
  }
  return (
    <nav style={{backgroundColor : toggle ? "#FDA403" : "#056365"  }}>
      <div className="App">
      <img src={ require('../../images/logo.png')} height={60} width={60} >
    </img>
      </div>
      <div className="toggle-container" onClick={handleToggleChange}>
        <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>{toggle ? "Buy" : "Donation"}
        {/* <Route path="/Buy" element={<BuyHome/>}/> */}
        </div>
      </div>
      <ul>  
        <li><Link className="nav-link" to="/login">Login</Link></li>
        <li><Link className="nav-link" to="/signup">Signup</Link></li>
        <li><Link className="nav-link" to="/aboutus">About Us</Link></li>
        <li><Link className="nav-link" to="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;