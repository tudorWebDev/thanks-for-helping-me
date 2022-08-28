import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 md:px-8 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
          netflix
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-4">sign in</button>
        </Link>
        <Link to='/signup'>
          <button className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white">
            sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
