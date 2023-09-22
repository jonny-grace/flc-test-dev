import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/company.jpg';
import accer from '../../public/assets/logos/accer.png';
import braun from '../../public/assets/logos/braun.png';
import duracel from '../../public/assets/logos/duracel.png';
import hissense from '../../public/assets/logos/hissense.png';
import lg from '../../public/assets/logos/lg.png';
import lumix from '../../public/assets/logos/lumix.png';
import ml from '../../public/assets/logos/ml.png';
import panasonic from '../../public/assets/logos/panasonic.png';
import sansung from '../../public/assets/logos/sansung.png';




const Client = () => {
  return (
    <div className="container mx-auto mt-5 font-inter">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Clients</h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-12/12 xl:mx-auto">Our diverse clientele fuels our passion for crafting standout campaigns. Join our league of clients and let&apos;s create marketing wonders together!</p>
      </div>

      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15">
      <div className="flex flex-wrap justify-center gap-2 md:gap-10 my-10">
          {/* Add the same company logo icon repeatedly */}
          
            <Image src={accer} alt="Company Logo" className=' h-7' />
            <Image src={braun} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={duracel} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={hissense} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={lg} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={lumix} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={ml} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={panasonic} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={sansung} alt="Company Logo" className=' h-7 w-20 ml-2' />
          
          
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-10 my-10">
          {/* Add the same company logo icon repeatedly */}
          
            <Image src={accer} alt="Company Logo" className=' h-7' />
            <Image src={braun} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={duracel} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={hissense} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={lg} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={lumix} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={ml} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={panasonic} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={sansung} alt="Company Logo" className=' h-7 w-20 ml-2' />
          
          
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-10 my-10">
          {/* Add the same company logo icon repeatedly */}
          
            <Image src={accer} alt="Company Logo" className=' h-7' />
            <Image src={braun} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={duracel} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={hissense} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={lg} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={lumix} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={ml} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={panasonic} alt="Company Logo" className=' h-7 w-20 ml-2' />
            <Image src={sansung} alt="Company Logo" className=' h-7 w-20 ml-2' />
          
          
        </div>
      </div>
    </div>
  );
}

export default Client;