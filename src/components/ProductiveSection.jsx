import React from "react";
import productiveImage from "../assets/illustration-stay-productive.png";

const ProductiveSection = () => {
  return (
    <div className='flex flex-col md:flex-row px-8 md:px-16 py-16 pb-24 gap-10 items-center'>
      <img src={productiveImage} className='w-full md:w-1/2 h-fit' />
      <div className='flex flex-col justify-center gap-3'>
        <h2 className='font-bold text-2xl md:text-3xl'>
          Stay productive,
          <br className='hidden md:block' />
          wherever you are
        </h2>
        <p className=' text-slate-300 max-w-580'>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className='text-slate-300 max-w-580'>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href='#'
          className='text-cyan-500 underline text-lg underline-offset-8'
        >
          See how Fylo works
        </a>
      </div>
    </div>
  );
};

export default ProductiveSection;
