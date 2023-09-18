import React from 'react';

const BoxComponent = () => {
  return (
    <div className=" mt-5  flex md:flex-row md:w-[1200px] md:h-[650px] flex-col">
      {/* the first image box  Width 766.26px Height 1118.91px */}
      <div className="flex-grow md:w-[300px]">
  <div className="relative flex h-full">
    <img 
      src="/assets/DPOufH.png"
      alt="Your Image"
      className="object-cover hover:cursor-pointer w-full"
    />
    <div className="absolute inset-0 flex  bg-gray-500 bg-opacity-50 text-white p-4">
      <div>
        <p className='text-xl font-semibold text-left'>featured // events</p>
        <h2 className="text-4xl font-bold mt-10">Honor Magic Pro Launch</h2>
        <p className='mt-3 font-semibold'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla</p>
        <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-white decoration-2 group-hover:underline font-medium">
          Learn more
        </span>
      </div>
    </div>
  </div>
</div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          <img
            src="bulk-image2.jpeg"
            alt="Image for Column b2"
            className="object-cover hover:cursor-pointer w-full h-full"
          />
        </div>
        <div className="flex-grow pt-80 bg-green-900 hover:cursor-pointer">
          <h2 className="text-4xl font-bold mt-[-300px] w-48 px-10 pt-5 text-white">Undiz Influencers</h2>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow pt-72 bg-red-950 hover:cursor-pointer text-white">
          <h2 className="text-4xl font-bold mt-[-280px] w-48 px-10">Ajmal Perfumes</h2>
          <p className=' w-96 px-10'>you can modify the code to display all the tabs horizontally instead of wrapping them.</p>
          <a ><span className=' w-96 px-10 mt-20 '>Learn More</span> </a>
        </div>
        <div className="flex-grow">
          <img
            src="bulk-image2.jpeg"
            alt="Image for Column C2"
            className="object-cover hover:cursor-pointer w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;