import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { FaEnvelope, FaPhone } from "react-icons/fa";
import styles from './Contact.module.css';

// import contactImage from './contact-image.jpg';

function ContactUs() {
  return (
    <div className={styles.container4}>
	 	<div className="form">
    <div className={styles.containerContact}>
      <h1>Contact Us</h1>
      <hr></hr>
      <br></br>
      <div>
        <label htmlFor="name">Name:</label>
        <br></br>
        <input type="texttt" id="name" placeholder="Enter your name" />
        <br></br>
        <label htmlFor="email">Email:</label>
        <br></br>
        <input type="texttt" id="email" placeholder="Enter your email" />
        <br></br>
        <label htmlFor="phone">Phone Number:</label>
        <br></br>
        <input type="texttt" id="phone" placeholder="Enter your phone number" />
        <label htmlFor="message">Message:</label>
        <br></br>
        <input type="textt" className="placeholder-text" placeholder="Enter your message." name="number" required style={{ width: '450px', height: '150px'}} ></input>
        <br></br>
        <div className={styles.contbutton}>
        <button type="submit" className='contactbtn button' >Submit</button>
        </div>
      </div>

    </div>
    </div>
    </div>
    
    
  );
}

export default ContactUs;