import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className=' sticky top-0 left-0 flex flex-row justify-between bg-main items-center px-5 md:px-16 py-4 md:py-5 '>
      <img src={logo} alt='fylo logo' className=' w-24 sm:w-28 ' />
      <div className='font-raleway flex flex-row gap-6 items-center text-gray-200'>
        <a href='#' className='Features'>
          Features
        </a>
        <a href='#' className='Features'>
          Team
        </a>
        <a href='#' className='Features'>
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
