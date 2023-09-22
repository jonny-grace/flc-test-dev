import React from 'react'

const Service = () => {
  return (

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:py-14 mx-auto font-inter">
      <div className="font-bold justify-center items-center text-center ">
        <h1 className="text-5xl lg:text-7xl md:pl-10 font-extrabold">
          beyond
        </h1>
        <strong className="block font-extrabold md:pl-10 text-5xl lg:text-7xl">
          Marketing
        </strong>
        <p className="mt-10 font-semibold text-1xl   md:text-center text-start">Join us, as we navigate the uncharted waters of experiential marketing. <br />
          At FLC, we are the dreamers, the explorers and the architects crafting immersive <br />
          moments that captivate hearts and minds</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 mt-10 ">
        <a className="group flex flex-col justify-center items-center  hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
          <div className="flex  w-24 h-24">
          <img
            src="/assets/marketing1.png"
            alt="Your Image"
            className="object-cover w-full"
          />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-red-600">Marketing</h3>
            <p className="mt-1 text-gray-800">Engaging audiences through
              success driven marketing
              campaigns
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              Learn more

            </span>
          </div>
        </a>

        <a className="group flex flex-col justify-center items-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
        <div className="flex  w-24 h-24">
          <img
            src="/assets/events.png"
            alt="Your Image"
            className="object-cover w-full"
          />
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-red-600">Events & Exhibition</h3>
            <p className="mt-1 text-gray-800 ">Curating exceptional brand
              experiences through
              dynamic events
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              Learn more

            </span>
          </div>
        </a>



        <a className="group flex flex-col justify-center items-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
        <div className="flex  w-24 h-24">
          <img
            src="/assets/digital.png"
            alt="Your Image"
            className="object-cover w-full"
          />
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-blue-600">Digital</h3>
            <p className="mt-1 text-gray-800">Strategically orchestrating
              impactful and result oriented
              digital campaigns

            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              Learn more

            </span>
          </div>
        </a>



        <a className="group flex flex-col justify-center items-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
        <div className="flex  w-24 h-24">
          <img
            src="/assets/contentproduction.png"
            alt="Your Image"
            className="object-cover w-full"
          />
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-blue-600">Content Productio</h3>
            <p className="mt-1 text-gray-800 ">Crafting content that brings
              your brand &apos; s story to life

            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              Learn more

            </span>
          </div>
        </a>
      </div>
    </div>

  )
}

export default Service