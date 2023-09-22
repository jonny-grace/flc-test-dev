import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat font-inter"
      style={{ backgroundImage: "url(/assets/homeimage.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
  
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 flex justify-center sm:px-6 lg:flex md:flex md:justify-center md:items-center lg:justify-center lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center  md:text-center lg:text-center text-white">
          <h1 className="text-5xl lg:text-7xl  font-inter font-extrabold">
            beyond
          </h1>
          <strong className="block font-extrabold text-5xl lg:text-7xl">
            experiance
          </strong>
       
          <div className="mt-8  flex flex-wrap   text-center ">
            <a
              href="#"
              className="block w-full    px-12 py-3 text-sm underline font-medium text-white shadow hover:font-bold focus:outline-none focus:ring active:font-bold"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero