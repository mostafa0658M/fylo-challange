import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className=' bg-card rounded-md w-full flex flex-col py-8 pb-6 px-7 gap-5'>
      <p className='text-slate-300'>{review.text}</p>
      <div className='flex flex-row gap-2'>
        <img src={review.photo} alt='photo' className='w-8 h-8 rounded-full' />
        <div className='flex flex-col '>
          <h4 className='text-white font-bold text-sm'>{review.postedBy}</h4>
          <span className='text-slate-300 text-sm'>{review.role}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
