import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({hero}) => {
 
  return (
    <section
      className={`relative w-full bg-cover bg-center bg-no-repeat font-inter  bg-blue-400 h-[300px] md:h-[450px] lg:h-[660px]`}
    >
      <div className="absolute inset-0 bg-black h-[300px] md:h-[450px] lg:h-[660px] opacity-90">
      <Image src={hero.path} width={1000} alt='' height={1000} className=' w-full h-[300px] md:h-[450px] lg:h-[660px] ' />

      </div>
  
      <div
        className="relative mx-auto max-w-screen-xl pt-24 md:pt-40 flex justify-center sm:px-6 lg:flex md:flex md:justify-center md:items-center lg:justify-center lg:h-full lg:items-center lg:px-8"
      >
        <div className=" w-56  text-center lg:w-96   text-white">
          <h1 className="text-5xl lg:text-6xl font-inter font-gotham font-bold">
            {hero.title.toLowerCase()}
          </h1>
         
       
          <div className="mt-8  flex flex-wrap   text-center ">
            <Link
              href="#"
              className="block w-full    px-12 py-3 text-sm underline font-medium text-white shadow hover:font-bold focus:outline-none focus:ring active:font-bold"
            >
              {hero.moreButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero