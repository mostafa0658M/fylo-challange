import React from "react";
import intro from "../assets/illustration-intro.png";

const HeroSection = () => {
  return (
    <div className=' gap-5 text-center bg-intro sm:bg-curvyDesktop bg-curvyMobile bg-no-repeat bg-bottom bg-contain flex flex-col items-center py-16 pb-32'>
      <img
        src={intro}
        alt='intro-illustration'
        className='w-300 sm:w-560 mb-5'
      />
      <h2 className='font-bold text-3xl max-w-580 '>
        All your files in one secure location, accessible anywhere.
      </h2>
      <p className='max-w-560 text-slate-300'>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className='py-3 px-20 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
