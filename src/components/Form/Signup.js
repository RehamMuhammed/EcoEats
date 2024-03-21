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
            <div className="col-3">
                <h5>Sign Up</h5>
                {/* <span>register and enjoy the service</span> */}

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Username' />
                    <input type="text" {...register("email")} placeholder='Email' />
                    <input type="password" {...register("password")} placeholder='Password' />
                    <input type="password" {...register("confirmpwd")} placeholder='Confirm Password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 11 })} placeholder='Mobile Number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign Up</button>
                    <Link to='/Login'>Already have an account</Link>

                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
