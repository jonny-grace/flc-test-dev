import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = ({ footerData }) => {
  return (
    <footer
      className=" text-white font-inter"
      style={{ backgroundColor: "#333333" }}
    >
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 pt-8">
          <div className="p-4 flex flex-col items-center md:gap-2 md:items-start">
            <div className="px-3 md:h-[190px] py-3 mb-4">
              <p className="mb-4 text-start md:mr-8 text-[14px]  md:w-[180px]">
                {footerData.description}
              </p>
            </div>

            <Image
              src={footerData.logo.data.attributes.url}
              alt="Logo"
              className="ml-4 mt-4 md:mt-16"
              width={100}
              height={100}
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-start mb-4 text-[28px] lowercase">
              {footerData.talk}
            </h2>
            <div className="w-[304px] h-[77px] text-[14px] text-start">
              <p className="text-start mb-2">Phone: {footerData.phone}</p>
              <p className="text-start">Email: {footerData.email}</p>
            </div>
            <div className="md:mt-16 mt-4">
              <h2 className="font-bold text-start mb-4 text-[28px] lowercase">
                {footerData.follow}
              </h2>
              <div className="flex">
                <Link
                  href={footerData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href={footerData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href={footerData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href={footerData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} className=" bg-white text-black" />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-start md:text-start mb-4 text-[28px] lowercase">
              {footerData.visit}
            </h2>
            <div className="text-start md:text-start flex flex-col gap-6 text-[14px]  w-[240px]">
              <div>
                <strong>{footerData.usa}:</strong>
                <p className="">{footerData.uaeAddress}</p>
              </div>
              <div>
                <strong>{footerData.india}:</strong>
                <p className="">{footerData.indiaAddress}</p>
              </div>
              <div>
                <strong>{footerData.ksa}:</strong>
                <p>{footerData.ksaAddress}</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:ml-9">
            <h2 className="font-bold text-start md:text-start mb-4 text-[28px] lowercase">
              {footerData.links}
            </h2>
            <div className="text-start md:text-start">
              <Link href="/link1" className="block mt-2">
                <p className="text-white hover:text-gray-300 transition duration-300">
                  {footerData.linkAbout}
                </p>
              </Link>
              <Link href="/link2" className="block ">
                <p className="text-white hover:text-gray-300 transition duration-300">
                  {footerData.linkServices}
                </p>
              </Link>
              <Link href="/joinOurTeam" className="block ">
                <p className="text-white hover:text-gray-300 transition duration-300">
                  {footerData.linkJoin}
                </p>
              </Link>
            </div>
            <p className="mt-8 md:pr-20 md:ml-[-150px]  text-center md:mt-56">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
