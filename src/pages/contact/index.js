import React from "react";
import Navbar from "../../components/Navbar";
import JoinUs from "../../components/JoinUs";
// import Navbar from '../../components/Navbar'
const index = () => {
  return (
    <>
    <Navbar />
    <div className="  p-4 md:mx-40 mt-40 mb-10 font-inter">
      <h1 className="text-4xl font-bold mb-6">happy to Partner!</h1>
      <p className="  mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nunc at condimentum accumsan, est ex bibendum tortor, nec
        feugiat tellus nisi nec elit. Mauris sed libero eget justo tristique
        semper.
      </p>
      <div className="flex flex-col sm:flex-row gap-48">
        <div className="w-full sm:w-1/2 pr-4 ">
          
          <form className=" flex flex-col ">
            <div className="mb-4">
              <label htmlFor="help-text" >
                How Can We Help?
              </label>
              <input
                type="text"
                id="help-text"
                className="block w-full mt-1 p-2 py-10 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <label htmlFor="company-email" >
              Company Email
            </label>
            <input
              type="email"
              id="company-email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
            />
            <div className=" flex justify-end"><button
              type="submit"
              className=" bg-black text-white py-2  rounded mt-4 w-32"
            >
              Submit
            </button></div>
            
          </form>
        </div>
        <div className="w-full sm:w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-7">Our Offices:</h2>
          <div className="mb-4">
            <h3 className="font-bold  mb-4">UAE Office:</h3>
            <p>1501, Concord Tower, Media City,</p>
            <p>PO Box 283795, Dubai, UAE.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-4">KSA Office:</h3>
            <p>Al Tadamun Al Arabi Street,</p>
            <p>Mishrifah Dist, Jeddah SA</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-4">India Office:</h3>
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