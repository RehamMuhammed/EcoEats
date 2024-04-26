import React from 'react'
import bgImg from '../../images/logo.png';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../FireBase.config';
import { doc, setDoc } from 'firebase/firestore';
import DynamicForm from '../DynamicForm';

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

export default function Form() {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        const { email, password, confirmpwd, username, mobile, city, country, gender } = data
        if (password !== confirmpwd) {
            console.log("Passwords don't match!")
        }
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            const ref = doc(db, "users", user.uid)
            const data = {
                id: user.uid,
                email,
                username,
                mobile,
                city,
                country,
                gender

            }
            await setDoc(ref, data);
            console.log("Hehehe Hello!")
            navigate("/")
        }

        catch (error) {
            console.error('Signup error:', error);
        }
    };


    return (
        <section>
            <div className="register">
                {/* <DynamicForm /> */}
                <div className="col-3">
                    <h5>Sign Up</h5>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")} placeholder='Username' />
                        <input type="text" {...register("email")} placeholder='Email' />
                        <input type="password" {...register("password")} placeholder='Password' />
                        <input type="password" {...register("confirmpwd")} placeholder='Confirm Password' />
                        <input type="text" {...register("mobile", { required: true, maxLength: 11 })} placeholder='Mobile Number' />
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                        <input type="text" {...register("city")} placeholder='City' />
                        <input type="text" {...register("country")} placeholder='Country' />
                        <div className='d-flex text-dark gap-4'>
                            <div className='d-flex text-dark gap-4'>
                                <div className='d-flex justify-content-center align-items-center gap-4'>
                                    <input type="radio" value={"Male"} name='gender' {...register("gender")} />
                                    <label style={{ color: 'lightblue', textShadow: '1px 1px 1px #2c2d34 ', fontSize: '15px' }}>Male</label>
                                </div>
                                <div className='d-flex justify-content-center align-items-center gap-4'>
                                    <input type="radio" value={"Female"} name='gender' {...register("gender")} />
                                    <label style={{ color: 'pink', textShadow: '1px 1px 1px #2c2d34 ', fontSize: '15px' }}>Female</label>

                                </div>
                            </div>
                        </div>
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
