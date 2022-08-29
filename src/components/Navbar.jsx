
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
        <h1 className="text-green-600 text-4xl font-bold cursor-pointer ">
          netflix
        </h1>
      </Link>
     {user?.email ?  (<div>
        <Link to="/account">
          <button className="text-white pr-4">Account</button>
        </Link>
        
          <button onClick={handleLogout} className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white">
            Logout
          </button>
        
      </div>) : (<div>
        <Link to="/login">
          <button className="text-white pr-4">sign in</button>
        </Link>
        <Link to='/signup'>
          <button className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white">
            sign up
          </button>
        </Link>
      </div>)}
    </div>
  );
};

export default Navbar;
