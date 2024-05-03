import React, { useState } from "react";
import "./DonationThSoYk.css";
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireBase.config";

const DonationThoSoYk = () => {
	const navigate = useNavigate()
	const [formValues, setFormValues] = useState({
		name: "",
		address: "",
		phone_number: "",
		family_number: "",
		food_description: "",
		food_quantity: "",
		comment: ""
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
			const collectionRef = collection(db, "donations")
			await addDoc(collectionRef, formValues)
			console.log("Hehehe, thank you for your donation!")
			navigate("/")
		}
		catch (e) {
			console.log(e)
		}
	}

	return (
		<div className="container12">
			<div className="form">
				<form onSubmit={handleSubmit}>
					<h1>Donate To Someone You Know</h1>
					<p>Please fill in this form to let us know the info about the person you'll donate to.</p>
					<hr></hr>

					<label for="name"><b>Name:</b></label><br></br>
					<input type="textt" placeholder="Enter his name" name="name" required onChange={(e) => updateValues("name", e.target.value)}></input>
					<br></br>

					<label for="address"><b>Address:</b></label><br></br>
					<input type="textt" placeholder="Enter their address" name="address" required onChange={(e) => updateValues("address", e.target.value)}></input>
					<br></br>

					<label for="number"><b>Phone Number:</b></label><br></br>
					<input type="textt" placeholder="Enter his phone number" name="number" required onChange={(e) => updateValues("phone_number", e.target.value)}></input>
					<br></br>

					<label for="familyno"><b>Number of Family Members:</b></label><br></br>
					<input type="number" placeholder="1" min="1" max="100" name="number" required onChange={(e) => updateValues("family_number", e.target.value)}></input>
					<br></br>

					<label for="details"><b>Food Details:</b></label>

					<hr className="customhr"></hr>

					<p style={{ textSizeAdjust: '1px' }}> Food Description:</p>
					<input type="textt" className="placeholder-text" placeholder="Enter the food details you're going to donate with." name="number" required style={{ width: '450px', height: '150px' }} onChange={(e) => updateValues("food_description", e.target.value)}></input>
					<br></br>


					<p>Quantity of Food:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload Photo:</p>
					<input type="number" name="quantity" min="1" max="100" placeholder="1" style={{ width: '180px' }} onChange={(e) => updateValues("food_quantity", e.target.value)}></input>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="file" class="file-input" id="name"></input>

					<br></br>
					<br></br>
					<label for="comment"><b>Any Comments:</b></label><br></br>
					<input type="textt" placeholder="Enter your comment" name="comment" required onChange={(e) => updateValues("comment", e.target.value)}></input>
					<br></br>
					<hr></hr>

					<div className="button-gp">
						<Link class="donbutton button" to="/"> Back to Home Page </Link>
						<button type="submit" class="donbutton button">Donate Now</button>
					</div>
				</form>
			</div>

		</div>
	)
}

export default DonationThoSoYk;