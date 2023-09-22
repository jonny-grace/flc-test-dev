import React from 'react';

const BoxComponent = () => {
  return (
    <div className="container mt-5 bg-orange-300 flex md:flex-row md:w-[1200px] md:h-[650px] flex-col font-inter">
      {/* the first image box  Width 766.26px Height 1118.91px */}
      <div className="flex-grow bg-red-400 md:w-[300px]">
        <div className="relative flex h-full">
          <img
            src="bulk-image.jpeg"
            alt="Your Image"
            className="object-cover w-full"
          />
          <div className="absolute top-0 left-0 p-4">
            <h2 className="text-white text-2xl font-bold">Image Title</h2>
            <p className="text-white text-lg">Short Description</p>
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow bg-blue-400">
          <img
            src="bulk-image2.jpeg"
            alt="Image for Column B1"
            className="object-cover w-full"
          />
        </div>
        <div className="flex-grow pt-80 bg-green-400">
          column b2
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow pt-72 bg-purple-400">
         column c1 
        </div>
        <div className="flex-grow bg-gray-400">
          <img
            src="bulk-image2.jpeg"
            alt="Image for Column C2"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;