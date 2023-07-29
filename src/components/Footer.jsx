import React from "react";
import logo from "../assets/logo.svg";
import { MdLocationOn } from "react-icons/md";
import {
  BiSolidPhoneCall,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className='flex flex-col px-10 sm:px-16 pt-56 pb-24 gap-5'>
      <img src={logo} alt='fylo logo' className=' w-36 ' />
      <div className='font-raleway flex flex-col lg:flex-row gap-6 text-gray-200 justify-between w-full'>
        <div className='flex flex-row gap-3'>
          <MdLocationOn className='w-5 h-5 mt-1' />
          <span className='text-sm text-slate-300 max-w-290'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-3'>
            <BiSolidPhoneCall className='w-5 h-5' />
            <span className='text-sm text-slate-300 max-w-290'>
              +1-543-123-4567
            </span>
          </div>
          <div className='flex flex-row gap-3'>
            <MdLocationOn className='w-5 h-5' />
            <span className='text-sm text-slate-300 max-w-290'>
              example@fylo.com
            </span>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-x-16 gap-y-3'>
          <a href='#'>About Us</a>
          <a href='#'>Jobs</a>
          <a href='#'>Press</a>
          <a href='#'>Blog</a>
          <a href='#'>Contact Us</a>
          <a href='#'>Terms</a>
          <a href='#'>Privacy</a>
        </div>
        <div className='flex flex-row gap-3 self-center lg:self-auto'>
          <a
            href='#'
            className='flex items-center justify-center w-8 h-8 border border-white rounded-full'
          >
            <BiLogoFacebook />
          </a>
          <a
            href='#'
            className='flex items-center justify-center w-8 h-8 border border-white rounded-full'
          >
            <BiLogoTwitter />
          </a>
          <a
            href='#'
            className='flex items-center justify-center w-8 h-8 border border-white rounded-full'
          >
            <BiLogoInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
