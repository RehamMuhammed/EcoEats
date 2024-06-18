import React from 'react'
import Styles from './Checkout.module.css';
import { Link } from 'react-router-dom';

function Completion(props) {
    // return <div className='d-flex flex-column align-items-center'>
    //     <h1 className='text-dark'>Thank you! 🎉</h1>;
    //     <Link to='/buy' className={`${Styles.pay_btn}`}>Back to Home Page</Link>
    // </div>
    return <div class="contentt">
        <div class="wrapper-11">
            <div class="wrapper-22">
                <h1>Thank you !</h1>
                <p>Thank you for your generous Donation!  </p>
                <p>you should receive a confirmation email soon  </p>
                <Link to='/buy' className={`${Styles.go_home1}`}>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
}

export default Completion;