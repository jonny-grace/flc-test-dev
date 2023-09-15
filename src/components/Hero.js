import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:justify-center lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-5xl lg:text-7xl md:pl-10 font-extrabold">
            beyond
          </h1>
          <strong className="block font-extrabold text-5xl lg:text-7xl">
            experiance
          </strong>
       
          <div className="mt-8  flex flex-wrap justify-center sm:text-center lg:text-left">
            <a
              href="#"
              className="block w-full sm:w-auto rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
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