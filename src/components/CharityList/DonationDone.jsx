import React from 'react'
import Styles from './DonationDone.css';
import { Link } from 'react-router-dom';

function DonationDone(props) {
    // return <div className='d-flex flex-column align-items-center'>
    //     <h1 className='text-dark'>Thank you! 🎉</h1>
    //     <Link to='/' className='done-btn'>Back to Home Page</Link>
    // </div>
    return <div class="content">
        <div class="wrapper-1">
            <div class="wrapper-2">
                <h1>Thank you !</h1>
                <p>Thank you for your generous Donation!  </p>
                <p>you should receive a confirmation email soon  </p>
                <Link to='/' class="go-home">
                    Back to Home

                </Link>
            </div>
        </div>
    </div>
}

export default DonationDone;