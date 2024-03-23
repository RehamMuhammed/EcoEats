import React from 'react'
import bgImg from '../../images/logo.png';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';
import { auth } from '../../FireBase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';



export default function Form() {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        const { email, password } = data
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            toast.success("Successfully logged in");
            navigate("/")
            console.log("Hehehe Hello!");
            console.log(user);
        }
        catch (error) {
            toast.error("Something went wrong");
            console.error('Login error:', error);
        }
    }
    // console.log(watch('username'));

    return (
        <section>

            <div className="register">
                <div className="col-1">
                    <h5>Sign In</h5>
                    {/* <span>Enjoy the service</span> */}

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("email")} placeholder='Email' />
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
