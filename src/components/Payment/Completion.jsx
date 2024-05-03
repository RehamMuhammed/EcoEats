import React from 'react'
import Styles from './Checkout.module.css';
import { Link } from 'react-router-dom';

function Completion(props) {
    return <div className='d-flex flex-column align-items-center'>
        <h1 className='text-dark'>Thank you! 🎉</h1>;
        <Link to='/buy' className={`${Styles.pay_btn}`}>Back to Home Page</Link>
    </div>
}

export default Completion;