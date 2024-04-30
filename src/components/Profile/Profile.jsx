import React, { useCallback, useEffect, useState } from 'react'
import './Profile.css'
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { db } from '../../FireBase.config';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

function Profile() {
    const { id: userId } = useParams()
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm()
    const onSubmit = async (data) => {
        setIsLoading(true);
        const docRef = doc(db, 'users', userId);
        try {
            await setDoc(docRef, data);
            toast.success("HEHEHEHEHEH")
            alert("Updated Successfully")
        } catch (e) {
            console.log("error: ", e)
        } finally {
            setIsLoading(false);
        }
    };
    const getUsers = useCallback(async () => {
        const collectionRef = collection(db, "users");
        const snapshot = await getDocs(collectionRef);
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        const selectedUser = data.find(user => user.id === userId);
        setUserData(selectedUser);
        for (let key in selectedUser) {
            setValue(key, selectedUser[key]);
        }
    }
    )
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div style={{ backgroundImage: `url(${require('../../images/white2.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
            <section>
                <div className="row justify-content-center">
                    <div className="col-8 w-full">
                        <h1 className='text-center mt-5' style={{ color: '#1254' }}>Profile</h1>
                        <form id='form' className='flex flex-col align-items-stretch' onSubmit={handleSubmit(onSubmit)}>
                            <label className='plabels'>Name :</label>
                            <input type="text" className='profile-containers' {...register("username")} placeholder='Username' />
                            <label className='plabels'>Email :</label>
                            <input type="text" className='profile-containers' {...register("email", { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} placeholder='Email' />
                            <span className='text-danger'>
                                {errors.email?.type === "pattern" && "Invalid Email"}
                            </span>
                            <label className='plabels'>Mobile Number :</label>
                            <input type="text" {...register("mobile", { required: true, maxLength: 11, pattern: /^01[0125][0-9]{8}$/ })} placeholder='Mobile Number' />
                            <span className='text-danger'>
                                {errors.mobile?.type === "required" && "Mobile Number is required"}
                                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                                {errors.mobile?.type === "pattern" && "Invalid Phone Number"}
                            </span>
                            <label className='plabels'>City :</label>
                            <input type="text" {...register("city")} placeholder='City' />
                            <label className='plabels'>Country :</label>
                            <input type="text" {...register("country")} placeholder='Country' />
                            <div className='d-flex text-dark gap-4'>
                                <div className='d-flex justify-content-center align-items-center gap-4'>
                                    <label className='plabels'>Gender :</label>
                                    <input type="radio" value={"Male"} name='gender' {...register("gender")} />
                                    <label style={{ color: 'lightblue', textShadow: '1px 1px 1px #2c2d34 ', fontSize: '20px' }}>Male</label>

                                </div>
                                <div className='d-flex justify-content-center align-items-center gap-4'>
                                    <input type="radio" value={"Female"} name='gender' {...register("gender")} />
                                    <label style={{ color: 'pink', textShadow: '1px 1px 1px #2c2d34 ', fontSize: '20px' }}>Female</label>
                                </div>
                            </div>
                            <button className=' button-btn button   ' disabled={isLoading}>{isLoading ? 'Loading...' : 'Update Profile'}</button>
                        </form>

                    </div>
                </div >
            </section >
        </div >
    )
}

export default Profile