import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/bg.jpg'

const Client = () => {
  return (
    <div className="container mx-auto pt-16">
    <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">clients</h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-12/12 xl:mx-auto">Our diverse clientele fuels our passion for crafting standout campaigns. Join our league of clients and let&apos;s create

        marketing wonders together!</p>

        <div className="mt-10 flex items-center justify-center">
        <div className="border-r border-gray-400 h-4 mr-4" />
        <span className="mr-4">Integrated</span>
        <div className="border-r border-gray-400 h-4 mr-4" />
        <span className="mr-4"> FMCG</span>
        <div className="border-r border-gray-400 h-4 mr-4" />
        <span className="mr-4">Electronics</span>
        <div className="border-r border-gray-400 h-4 mr-4" />
        <span className="mr-4"> Fashion & Lifestyle</span>
        <div className="border-r border-gray-400 h-4 mr-4" />
        <span>Food & Beverage</span>
        <div className="border-r border-gray-400 h-4 mr-4" />
      </div>

    </div>
    <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <Image src={logo} alt='logo' />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <Image src={logo} alt='logo' />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
            <Image src={logo} alt='logo' />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
            <Image src={logo} alt='logo' />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <Image src={logo} alt='logo' />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <Image src={logo} alt='logo' />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <Image src={logo} alt='logo' />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <Image src={logo} alt='logo' />
        </div>
    </div>
</div>

  )
}

export default Client