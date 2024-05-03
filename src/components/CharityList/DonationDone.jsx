import React from 'react'
import Styles from './DonationDone.css';
import { Link } from 'react-router-dom';

function DonationDone(props) {
    return <div className='d-flex flex-column align-items-center'>
        <h1 className='text-dark'>Thank you! 🎉</h1>
        <Link to='/' className='done-btn'>Back to Home Page</Link>
    </div>
}

export default DonationDone;