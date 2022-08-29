
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const Navbar = () => {
  const {user,logOut}= UserAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 md:px-8 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-green-600 text-4xl font-bold cursor-pointer hover:text-green-800  duration-500 ">
       <span className="text-5xl"> &lt;</span>TWD<span className="text-5xl">&gt;</span>
        </h1>
      </Link>
     {user?.email ?  (<div>
        <Link to="/account">
          <button className="text-white p-2  mr-2 rounded hover:bg-green-600 duration-[0.8s]">Account</button>
        </Link>
        
          <button onClick={handleLogout} className="bg-green-600 px-4 py-2 rounded cursor-pointer text-white hover:bg-green-800 duration-500">
            Log Out
          </button>
        
      </div>) : (<div>
        <Link to="/login">
          <button className="text-white p-2 mr-2 rounded hover:bg-green-600 duration-[0.8s]">Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className="bg-green-600 px-4 py-2 rounded cursor-pointer text-white hover:bg-green-800 duration-500">
            Sign Up
          </button>
        </Link>
      </div>)}
    </div>
  );
};

export default Navbar;
