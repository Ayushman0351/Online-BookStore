import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Signup from './Signup';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div>
        {/* used modal for login box from daisyui */}
        
    <dialog id="my_modal_3" className="modal">
     <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>

    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter you email' className='w-80 px-3 border-rounder-md outline-none'
        {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

    </div>

    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="text" placeholder='Enter you password' className='w-80 px-3 border-rounder-md outline-none'
        {...register("password", { required: true })}/>
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
     
     {/* button */}
    <div className='mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Login</button>
        <br />
        
        Not registered?{" "}
        <Link to ="/signup" className='underline text-blue-400 cursor-pointer'>
            Signup</Link>
        
        
    </div>
    </form>
  </div>
</dialog>

    </div>
  );
}

export default Login