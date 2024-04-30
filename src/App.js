// import logo from './images/logo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
// import Donation from './components/Options/Donation';
import Signup from './components/Form/Signup';
import Login from './components/Form/Login';
import About from './components/About/About';
import BuyHome from './components/Buy/BuyHome';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import { useState } from 'react';

import AllCharities from './components/CharityList/AllCharities'
import CharityDetails from './components/Charities/CharityDetails';
import Stores from './components/Store/Stores'
import Profile from './components/Profile/Profile';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DonationThoSoYk from './components/DonationThSoYk/DonationThSoYk';
import Toaster from 'react-hot-toast';

import app from './FireBase.config';
import Charities from './components/Charities/Charities';
import StoreDetails from './components/Store/StoreDetails';
import AllProducts from './components/Products/AllProducts';
import Cart from './components/cart/Cart';
import { useSnapshot } from 'valtio';
import { cartStore } from './valtio/Cart';
import DonationForm from './components/CharityList/DonatationForm';

function App() {
  const snapshot = useSnapshot(cartStore);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Router>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/donation-form" element={<DonationThoSoYk />} />
            <Route path="/charities" element={<Charities />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/buy" element={<BuyHome />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/charities/:id" element={<CharityDetails />} />
            <Route path="/donation" element={<AllCharities />} />
            <Route path="/store" element={<Stores />} />
            <Route path="/store/:id" element={<StoreDetails />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='about' element={<About />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/DonationForm" element={<DonationForm />} />




            <Route path="/" element={<Home />} />

          </Routes>
        </div>


        <Footer toggle={toggle} />
        {cartStore.isVisible && <Cart />}
      </Router>

    </div>

  );
}

export default App;