import React from "react";
import profile1Image from "../assets/profile-1.jpg";
import profile2Image from "../assets/profile-2.jpg";
import profile3Image from "../assets/profile-3.jpg";
import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
  const reviews = [
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      postedBy: "Satish Patel",
      role: "Founder & CEO, Huddle",
      photo: profile1Image,
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      postedBy: "Bruce McKenzie",
      role: "Founder & CEO, Huddle",
      photo: profile2Image,
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      postedBy: "Iva Boyd",
      role: "Founder & CEO, Huddle",
      photo: profile3Image,
    },
  ];

  return (
    <div className='flex flex-col lg:flex-row justify-around py-8 px-12 gap-8 bg-quote bg-no-repeat bg-30'>
      {reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
    </div>
  );
};

export default ReviewsSection;
