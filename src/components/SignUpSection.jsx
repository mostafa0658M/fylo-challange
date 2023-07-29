import React from "react";

const SignUpSection = () => {
  return (
    <div className='flex justify-center items-center pt-20 -mb-32'>
      <div className='text-center items-center bg-intro rounded-lg px-10 sm:px-14 pt-12 pb-8 flex flex-col gap-5'>
        <h2 className='text-3xl font-bold'>Get early access today</h2>
        <p className='text-slate-300 max-w-580'>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className='flex flex-col md:flex-row gap-5 mt-3 w-full'>
          <input
            type='email'
            className='rounded-full bg-white outline-none px-12 py-3 text-black w-full md:w-460'
            placeholder='Enter your email'
          />
          <button className='rounded-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white whitespace-nowrap w-full md:w-fit'>
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
