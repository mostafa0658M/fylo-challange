import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <img src={image} alt='icon' className=' w-20' />
      <span className='font-bold text-lg'>{title}</span>
      <p className='text-slate-300 max-w-290 text-center'>{description}</p>
    </div>
  );
};

export default Card;
