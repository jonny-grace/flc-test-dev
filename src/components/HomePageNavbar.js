import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from '../../public/Frame.png';
import logoBlack from '../../public/Frame-black.png';

import Image from 'next/image';

const HomePageNavBar = ({logo}) => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 font-inter font-extrabold ${
      isScrolled ? 'bg-gray-100 text-black mt-0 transition ease-in-out duration-300 transform translate-y-0 px-12' : 'bg-transparent text-white md:ml-10 transition ease-in-out duration-500 transform md:translate-y-12'
    }`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
        <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <Image
                src={isScrolled ? logoBlack :  logo.path} 
                width={1000}
                height={1000}// Use the black logo when isScrolled is true
                alt="Logo"
                className="h-12 w-12 object-contain"
                
              />
            </a>
          </Link>

        </div>
        <div className="relative md:hidden">
          <button
            className={`text-gray-400 hover:text-white focus:outline-none focus:text-white ${
              isScrolled ? 'text-white' : 'text-gray-400'
            }`}
            onClick={toggleMenu}
          >
            <svg
            className={` h-6 w-6 fill-current font-inter ${
              isScrolled ? ' text-black' : 'bg-transparent text-white'
            }`}

              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 13H5v-2h14v2zM19 7H5V5h14v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 w-48 bg-gray-100 text-black  shadow-lg rounded-md font-inter">
              <Link href="/casestudy" legacyBehavior>
                <a className="block py-1 border border-top-black hover:font-bold ">Case Studies</a>
                
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="block py-1 border border-top-black hover:text-gray-300">Services</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="block py-1 border border-top-black hover:text-gray-300">About Us</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="block py-1 border border-top-black hover:text-gray-300">Contact Us</a>
              </Link>
              <Link href="/blogpage" legacyBehavior>
                <a className="block py-1  border border-top-black hover:text-gray-300">Blog</a>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex  space-x-16 mr-40 ">
          <Link href="/casestudy" legacyBehavior>
            <a className="hover:text-gray-300">Case Studies</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="hover:text-gray-300">Services</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gray-300">About Us</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-300">Contact Us</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="hover:text-gray-300">Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomePageNavBar;