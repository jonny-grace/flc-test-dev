import Image from "next/image";
import React from "react";
import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa";
  
const SmallCard = ({ icon, title, description }) => {
  return (
    <div className=" text-white p-4 mb-4 w-96  mt-4 pl-8 lg:w-72ut ">
      <div className="text-2xl mb-2 ml-5">
        <Image
        src={icon.url}
        alt={title}
        width={icon.width}
        height={icon.height}
        
        />
      </div>
      <h3 className="md:text-lg text-3xl mb-1">{title}</h3>
      <p className="text-sm  md:w-32">{description}</p>
    </div>
  );
};

const SmallCardList = ({title,values}) => {
  
  return (
    <div className="  mx-5 md:mx-8 gap-5  mb-10 font-inter " style={{background:'#DB6A6A'}}> 
        <h1 className=" mt-5 pt-3 ml-20 md:ml-36 md:text-2xl font-bold text-4xl">{title}</h1>
        <div className="flex justify-center items-center flex-wrap mx-8">
  {values && values.map((item, index) => (
    <div className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2" key={index}>
      <SmallCard
        icon={item.attributes.image.data.attributes}
        title={item.attributes.name}
        description={item.attributes.description}
      />
    </div>
  ))}
</div>
      
    </div>
  );
};

export default SmallCardList;