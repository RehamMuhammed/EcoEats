import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireBase.config";

import { FaEnvelope, FaPhone } from "react-icons/fa";
import styles from './Contact.module.css';

// import contactImage from './contact-image.jpg';

const ContactUs = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    phone_number: "",
    message: ""

  })

  const updateValues = (name, change) => {
    setFormValues(prev => {
      return {
        ...prev,
        [name]: change
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const collectionRef = collection(db, "messages")
      await addDoc(collectionRef, formValues)
      console.log("Hehehe, thank you for your message!")
      navigate("/")

    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <div className={styles.container4}>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className={styles.containerContact}>
            <h1>Contact Us</h1>
            <hr></hr>
            <br></br>
            <div>
              <label htmlFor="name">Name:</label>
              <br></br>
              <input type="texttt" id="name" placeholder="Enter your name" name="name" required onChange={(e) => updateValues("name", e.target.value)} />
              <br></br>
              <label htmlFor="email">Email:</label>
              <br></br>
              <input type="texttt" id="email" placeholder="Enter your email" name="email" required onChange={(e) => updateValues("email", e.target.value)} />
              <br></br>
              <label htmlFor="phone">Phone Number:</label>
              <br></br>
              <input type="texttt" id="phone" placeholder="Enter your phone number" name="number" required onChange={(e) => updateValues("phone_number", e.target.value)} />
              <label htmlFor="message">Message:</label>
              <br></br>
              <input type="textt" className="placeholder-text" placeholder="Enter your message." name="message" required style={{ width: '450px', height: '150px' }} onChange={(e) => updateValues("message", e.target.value)}></input>
              <br></br>
              <div className={styles.contbutton}>
                <button type="submit" className='contactbtn button' >Submit</button>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>


  );
}

export default ContactUs;