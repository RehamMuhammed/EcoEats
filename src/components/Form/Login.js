import React from 'react'
import bgImg from '../../images/logo.png';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'; 
import './Form.css';


export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>

        <div className="register">
            <div className="col-1">
                <h5>Sign In</h5>
                {/* <span>Enjoy the service</span> */}

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Username or Email' />
                    <input type="password" {...register("password")} placeholder='Password' />
                    <button className='btn'>Sign In</button>
                    <Link to='/Signup'>Create an account</Link>

                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
