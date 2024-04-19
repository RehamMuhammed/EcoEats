import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import {FaEnvelope, FaPhone} from "react-icons/fa";
import styles from './Contact.module.css';

// import contactImage from './contact-image.jpg';

function ContactUs() {
  return (
    <div className={styles.containerContact}>
      <h1>Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <FaEnvelope /> info@example.com
            </p>
            <p>
              <FaPhone  /> +1 123-456-7890
            </p>
            <img src={''} alt="Contact Us" className="contact-image" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;