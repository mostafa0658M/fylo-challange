import React from "react";
import { Card } from ".";
import accessImage from "../assets/icon-access-anywhere.svg";
import securityImage from "../assets/icon-security.svg";
import collaborationImage from "../assets/icon-collaboration.svg";
import anyFileImage from "../assets/icon-any-file.svg";

const FeaturesSection = () => {
  const cards = [
    {
      image: accessImage,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      image: securityImage,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      image: collaborationImage,
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration.\nNo email attachments required.",
    },
    {
      image: anyFileImage,
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];
  return (
    <div className='bg-main grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-16'>
      {cards.map((card) => (
        <Card
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
