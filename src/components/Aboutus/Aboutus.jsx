import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import styles from "./Aboutus.module.css";


function AboutUs() {
  return (
    <Container className={styles.aboutusContainer}>
      <h1>About Us</h1>
      <Row>
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vestibulum, sem at accumsan eleifend, nisi arcu dictum metus, eu
            sagittis metus diam nec lectus. Donec ut nunc euismod, dignissim
            felis quis, sagittis odio.
          </p>
          <ul>
            <li>
              <FaCheckCircle className="mr-2" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>
              <FaMapMarkerAlt className="mr-2" />
              Our headquarters is located at 123 Main St, City, State.
            </li>
            <li>
              <FaEnvelope className="mr-2" />
              Email us at info@example.com for any inquiries.
            </li>
          </ul>
        </Col>
        {/* <Col md={6}>
          <img src={'/'} alt="About Us" className="img-fluid" />
        </Col> */}
      </Row>
    </Container>
  );
}

export default AboutUs;