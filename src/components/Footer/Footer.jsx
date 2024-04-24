import React from "react";
import "./Footer.css";


const Footer = ({toggle}) => {
    return (
<div class="footer-distributed" style={{backgroundColor : toggle ? "#FDA143" : "#056365"  }} >

	<div class="footer-left">
    <br></br>

		<h3>  <span>  Donate with love,  </span>buy with purpose.</h3>

		<p class="footer-links">
			<a href="" class="fa">Home </a>
			·
			<a href="#">About Us </a>
			·
			<a href="#">Contact Us  </a>
		</p>

	</div>

	<div class="footer-center">
        <br></br>


		<div>
			<i class="fa fa-map-marker"></i>
			<p><span>12, San Stefano </span> Alexandria, Egypt</p>
		</div>

		<div>
			<i class="fa fa-phone"></i>
			<p>0123456789</p>
		</div>

		<div>
			<i class="fa fa-envelope"></i>
			<p><a href="EcoEats@company.com">EcoEats@company.com</a></p>
		</div>

	</div>

	<div class="footer-right">

		<p class="footer-company-about">
            <br></br>
			<span>About the website</span>
			This website is used to help you donate food for poor people, also buy any food with very good offers. Welcome to our website and we're waiting for your donations to the charities.
		</p>

		<div class="footer-icons">

			<a href="#"><i class="fa fa-facebook"></i></a>
			<a href="#"><i class="fa fa-twitter"></i></a>
			<a href="#"><i class="fa fa-linkedin"></i></a>
			<a href="#"><i class="fa fa-github"></i></a>

		</div>

	</div>
    </div>
    );
};

    export default Footer;