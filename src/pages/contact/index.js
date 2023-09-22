import React from "react";
import Navbar from "../../components/Navbar";
import JoinUs from "../../components/JoinUs";
// import Navbar from '../../components/Navbar'
const index = () => {
  return (
    <>
    <Navbar />
    <div className="  p-4 md:mx-48 mt-40 mb-10 font-inter">
      <h1 className="text-4xl font-bold mb-4">happy to Partner!</h1>
      <p className="text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nunc at condimentum accumsan, est ex bibendum tortor, nec
        feugiat tellus nisi nec elit. Mauris sed libero eget justo tristique
        semper.
      </p>
      <div className="flex flex-col sm:flex-row gap-32">
        <div className="w-full sm:w-1/2 pr-4 ">
          
          <form className=" flex flex-col ">
            <div className="mb-4">
              <label htmlFor="help-text" className="font-bold">
                How Can We Help?
              </label>
              <input
                type="text"
                id="help-text"
                className="block w-full mt-1 p-2 py-7 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <label htmlFor="company-email" className="font-bold">
              Company Email
            </label>
            <input
              type="email"
              id="company-email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full sm:w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-4">Our Offices</h2>
          <div className="mb-4">
            <h3 className="font-bold">UAE Office:</h3>
            <p>1501, Concord Tower, Media City,</p>
            <p>PO Box 283795, Dubai, UAE.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">KSA Office:</h3>
            <p>Al Tadamun Al Arabi Street,</p>
            <p>Mishrifah Dist, Jeddah SA</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">India Office:</h3>
            <p>401 B, Unitech Arcadia, South City 2,</p>
            <p>Sec 49, Gurugram - 122018 India.</p>
          </div>
        </div>
      </div>
    </div>
    <JoinUs/>
    </>
  ); 
};

export default index;