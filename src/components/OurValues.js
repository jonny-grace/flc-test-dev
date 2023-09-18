import React from "react";
import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa";
  
const SmallCard = ({ icon, title, description }) => {
  return (
    <div className=" text-white p-4 mb-4 w-64 sm:w-1/2 mt-4 pl-16 md:w-64">
      <div className="text-2xl mb-2 ml-5">{icon}</div>
      <h3 className="md:text-lg text-3xl mb-1">{title}</h3>
      <p className="text-sm  md:w-20">{description}</p>
    </div>
  );
};

const SmallCardList = () => {
  const items = [
    
    
    {
      icon: <FaFacebook size={28} />,
      title: "Card 1",
      description: "Description of Card 1",
    },
    {
      icon: <FaFacebook size={28} />,
      title: "Card 2",
      description: "Description of Card 2",
    },
    {
      icon: <FaFacebook size={28} />,
      title: "Card 3",
      description: "Description of Card 3",
    },
    {
      icon: <FaFacebook size={28} />,
      title: "Card 4",
      description: "Description of Card 4",
    },
    {
        icon: <FaFacebook size={28} />,
        title: "Card 1",
        description: "Description of Card 1",
      },
      {
        icon: <FaFacebook size={28} />,
        title: "Card 2",
        description: "Description of Card 2",
      },
      {
        icon: <FaFacebook size={28} />,
        title: "Card 3",
        description: "Description of Card 3",
      },
      {
        icon: <FaFacebook size={28} />,
        title: "Card 4",
        description: "Description of Card 4",
      }
    // Add more items as needed
  ];

  return (
    <div className=" bg-red-400 mx-5 md:mx-8 gap-5  mb-10 ">
        <h1 className=" mt-5 pt-3 ml-20 md:ml-36 md:text-2xl text-4xl">Our Values</h1>
        <div className=" flex justify-center items-center  flex-wrap">{items.map((item, index) => (
        <SmallCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}</div>
      
    </div>
  );
};

export default SmallCardList;