
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserAuth} from '../context/AuthContext';



const Signup = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const {user,signUp}= UserAuth()
    const [error,setError]=useState('')
    const navigate=useNavigate()

 


  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/02b6f19c-08c7-4dea-af0a-2206b4b1650a/RO-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              {error ?  <p className="p-3 bg-red-400 my-2">{error}</p> : null }
              <form onSubmit={ (e)=>{
                e.preventDefault()
                if(password.length < 6){setError(error.message)} else{  signUp(email,password);navigate('/')}
                  }} className="w-full flex flex-col py-4 john">
                <input
                onChange={(e)=>setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                onChange={(e)=>setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2 cursor-pointer" type="checkbox" /> Remember me
                  </p>
                  <p className="cursor-pointer">Need Help?</p>
                </div>
                <div>
                <p className='py-8'>
                  <span className='text-gray-600 mr-[0.4rem]'>
                    Already subscribed to Netflix?
                  </span>
                  <Link to='/login'>Sign In</Link>
                </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
