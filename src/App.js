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
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DonationThoSoYk from './components/DonationThSoYk/DonationThSoYk';
import Toaster from 'react-hot-toast';

import app from './FireBase.config';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Router>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <div style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/donation-form" element={<DonationThoSoYk />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/buy" element={<BuyHome />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <Footer toggle={toggle} />


      </Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
        }}
      />
    </div>

  );
}

export default App;