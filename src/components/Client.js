import Image from 'next/image';
import React from 'react';


const Client = ({clientsDetail}) => {
  
  const logos=clientsDetail.logos;

  return (
    <div className="container mx-auto mt-5 font-inter">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">{clientsDetail.title}</h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-12/12 xl:mx-auto">{clientsDetail.desc}</p>
      </div>

      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-2 md:px-24">
      <div className="flex  flex-wrap  md:gap-5 my-10">
          
          {logos.map((logo, index) => (
    <div key={index} className="w-1/7 p-2">
      <img
        src={logo.attributes.url}
        // width={20}
        // height={20}
        // width={logo.attributes.width}
        // height={logo.attributes.height}
        alt="Company Logo"
        className="w-full h-12 "
      />
    </div>
  ))}
          
          
          
        </div>
        
        
      </div>
    </div>
  );
}

export default Client;