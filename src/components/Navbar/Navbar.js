import React, { useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';
import logo from "../../images/logo.png";
// import Login  from '../Forms/LoginForm/Login'
// import SignUp from'../Forms/SignUpForm/SignUp';
// import BuyHome from'../Buy/BuyHome';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFirebaseUser from '../../hooks/useFirebaseUser';
import { signOut } from 'firebase/auth';
import { auth } from '../../FireBase.config';
import { OrangePaths } from '../../constants/paths';





const Navbar = ({ toggle, setToggle }) => {
  const user = useFirebaseUser();
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  console.log(pathname)
  const handleToggleChange = () => {
    setToggle(!toggle);
    toggle ? navigate("/") : navigate("/buy")
  }
  const logout = async () => {
    try {
      await signOut(auth)
      navigate("/login")
    }
    catch (error) {
      console.log(",error", error);
    }
  }

  useEffect(() => {
    for(let key of OrangePaths) {
      if ( pathname.includes(key) ) setToggle(true)
    }
  }, [pathname]);

  console.log(user)
  return (
    <nav style={{ backgroundColor: toggle ? "#FDA143" : "#056365" }}>
      <div className="left-child">
        <div className="App">
          <Link to={toggle ? '/buy' : '/'}>
            <img src={require('../../images/logo.png')} height={60} width={60} >
            </img>
          </Link>
        </div>
        <div className="toggle-container" onClick={handleToggleChange}>
          <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>{toggle ? "Buy" : "Donation"}
            {/* <Route path="/Buy" element={<BuyHome/>}/> */}
          </div>
        </div>
      </div>
      <ul>
        {user ? (
          <>
            <li><Link className="nav-link" to="/aboutus">About Us</Link></li>
            <li><Link className="nav-link" to="/contactus">Contact Us</Link></li>
            <li><Link className="nav-link" to={`/profile/${user.uid}`}>Profile</Link></li>
            <li className="nav-link" onClick={logout}>Logout</li>
          </>
        ) : (
          <>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/signup">Signup</Link></li>
            <li><Link className="nav-link" to="/aboutus">About Us</Link></li>
            <li><Link className="nav-link" to="/contactus">Contact Us</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;