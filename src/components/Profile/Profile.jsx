import React, { useCallback, useEffect, useState } from 'react'
import './Profile.css'
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { db } from '../../FireBase.config';
import { collection, getDocs } from 'firebase/firestore';

function Profile() {
    const { id: userId } = useParams()
    const [userData, setUserData] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async (data) => {

    };
    const getUsers = useCallback(async () => {
        const collectionRef = collection(db, "users");
        const snapshot = await getDocs(collectionRef);
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log(data.find(user => user.id === userId))
        return data;


    }
    )
    useEffect(() => {
        getUsers()
    }, [
        getUsers
    ])

    return (
        <div>
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
                                <div className='d-flex justify-content-center align-items-center gap-4'>
                                    <label>Female</label>
                                    <input type="radio" value={"Female"} name='gender' {...register("gender")} />
                                </div>
                                <div className='d-flex justify-content-center align-items-center gap-4'>
                                    <label>Male</label>
                                    <input type="radio" value={"Male"} name='gender' {...register("gender")} />
                                </div>
                            </div>
                            <button className='btn'>Sign Up</button>
                            <Link to='/Login'>Already have an account</Link>

                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile