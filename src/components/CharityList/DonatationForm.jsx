import React, { useState } from "react";
import "./DonationForm.css";
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireBase.config";

const DonationForm = () => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        name: "",
        phone_number: "",
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
            const collectionRef = collection(db, "charity donations")
            await addDoc(collectionRef, formValues)
            console.log("Hehehe, thank you for your donation!")
            navigate("/")
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="container2">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Donate To This Family</h1>
                    <p>Please fill in this form to know the donation details.</p>
                    <hr></hr>

                    <label for="name"><b>Name:</b></label><br></br>
                    <input type="textt" placeholder="Enter your name" name="name" required onChange={(e) => updateValues("name", e.target.value)}></input>
                    <br></br>

                    <label for="number"><b>Phone Number:</b></label><br></br>
                    <input type="textt" placeholder="Enter your phone number" name="number" required onChange={(e) => updateValues("phone_number", e.target.value)}></input>
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
                    <input type="textt" className="comments" placeholder="Enter your comment" name="comment" required onChange={(e) => updateValues("comment", e.target.value)}></input>
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

export default DonationForm;