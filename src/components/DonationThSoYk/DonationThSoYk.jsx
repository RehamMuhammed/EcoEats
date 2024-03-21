import React from "react";
import "./DonationThSoYk.css";

const DonationThoSoYk = () => {
    return (
		<div className="container2">
	 	<div className="form">
	 		<form action="">
	 			<h1>Donate To Someone You Know</h1>
	 			<p>Please fill in this form to let us know the info about the person you'll donate to.</p>
	 			<hr></hr>

	 			<label for="name"><b>Name:</b></label><br></br>
	 			<input type="textt" placeholder="Enter his name" name="name" required></input>
	 			<br></br>

	 			<label for="address"><b>Address:</b></label><br></br>
	 			<input type="textt" placeholder="Enter their address" name="address" required></input>
	 			<br></br>

	 			<label for="number"><b>Phone Number:</b></label><br></br>
	 			<input type="textt" placeholder="Enter his phone number" name="number" required></input>
	 			<br></br>

				 <label for="familyno"><b>Number of Family Members:</b></label><br></br>
	 			<input type="number" placeholder="How many family members?"  value="1" name="number" required></input>
	 			<br></br>

	 			<label for="details"><b>Food Details:</b></label>
				
				<hr className="customhr"></hr>
				
				<p style={{textSizeAdjust : '1px'}}> Food Description:</p>
	 			<input type="textt" className="placeholder-text" placeholder="Enter the food details you're going to donate with." name="number" required style={{ width: '450px', height: '150px'}}></input>
	 			<br></br>

				
				<p>Quantity of Food:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload Photo:</p>
                      <input type="number" name="quantity" min="1" max="100" value="1" style={{width: '180px'}}></input>
					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="file" class="file-input" id="name" style={{width: '180px'}}></input>
				
				<br></br>
				<br></br>
	 			<label for="comment"><b>Any Comments:</b></label><br></br>
	 			<input type="textt" placeholder="Enter your comment" name="comment" required></input>
	 			<br></br>
	 			<hr></hr>

	 			<button type="button" class="donbutton button" onClick=""> Back to Home Page </button>
	 			<button type="button" class="donbutton button" onClick="">Donate Now</button>

	 		</form>
	 	</div>

	    </div> 
    )
  }
    
  export default DonationThoSoYk;