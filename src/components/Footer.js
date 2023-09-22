import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white font-inter">
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 pt-8">
          <div className="p-4 flex flex-col items-center md:gap-2 md:items-start">
            <div className="px-3 md:h-[190px] py-3 mb-4">
              <p className="mb-4 text-start md:mr-8 text-[14px] w-[228px]">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequeat,vel illum dolore eu feuguat nulla
              </p>
            </div>

            <img
              src="/Frame.png"
              alt="Logo"
              className="ml-4 mt-4 md:mt-0"
              width={100}
              height={100}
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-start mb-4 text-[28px]">
              Talk to us
            </h2>
            <div className="w-[304px] h-[77px] text-[14px] text-start">
              <p className="text-start mb-2">Phone: +971 4 4548684</p>
              <p className="text-start">Email: talk2u@flc-me.com</p>
            </div>
            <div className="md:mt-16 mt-4">
              <h2 className="font-bold text-start mb-4 text-[28px]">
                Follow Us
              </h2>
              <div className="flex">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-start md:text-start mb-4 text-[28px]">
              Visit Us
            </h2>
            <div className="text-start md:text-start flex flex-col gap-6 text-[14px] w-[304px]">
              <p className="mb-2">
                <strong>UAE Office:</strong> 1501, Concord Tower, Media City, PO
                Box 283795, Dubai, UAE.
              </p>
              <p className="mb-2">
                <strong>India Office:</strong> 401 B, Unitech Arcadia, South
                City 2, Sec 49, Gurugram - 122018 India.
              </p>
              <p>
                <strong>KSA Office:</strong> Al Tadamun Al Arabi Street,
                Mishrifah Dist, Jeddah SA.
              </p>
            </div>
          </div>

          <div className="p-4 md:ml-9">
            <h2 className="font-bold text-start md:text-start mb-4 text-[28px]">
              Quick Links
            </h2>
            <div className="text-start md:text-start">
              <a href="/link1" className="block mt-2">
                <p className="text-white hover:text-gray-300 transition duration-300">
                  About Us
                </p>
              </a>
              <a href="/link2" className="block mt-2">
                <p className="text-white hover:text-gray-300 transition duration-300">
                  Service
                </p>
              </a>
              <a href="/joinOurTeam" className="block mt-2">
                <p className="text-white hover:text-gray-300 transition duration-300">
                  JOin our Team
                </p>
              </a>
            </div>
            <p className="mt-8 md:pr-20 md:ml-[-150px]  text-center md:mt-44">
              &copy; 2023 FLC Group all Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
