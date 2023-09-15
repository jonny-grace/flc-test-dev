import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/company.jpg';

const Client = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Clients</h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-12/12 xl:mx-auto">Our diverse clientele fuels our passion for crafting standout campaigns. Join our league of clients and let&apos;s create marketing wonders together!</p>
      </div>

      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15">
        <div className="flex flex-wrap justify-center gap-2 md:gap-10">
          {/* Add the same company logo icon repeatedly */}
          
            <Image src={logo} alt="Company Logo" width={70} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
          
          
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-10 my-10">
          {/* Add the same company logo icon repeatedly */}
          
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
            <Image src={logo} alt="Company Logo" width={75} height={75} />
          
          
        </div>
      </div>
    </div>
  );
}

export default Client;