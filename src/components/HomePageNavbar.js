import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from '../../public/Frame.png';
import logoBlack from '../../public/Frame-black.png';

import Image from 'next/image';

const HomePageNavBar = () => {
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
    <nav
      className={` fixed top-0 left-0 right-0 z-50 font-inter ${
        isScrolled ? 'bg-gray-100 text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
        <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <Image
                src={isScrolled ? logoBlack : logo} // Use the black logo when isScrolled is true
                alt="Logo"
                className="h-12 w-12"
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
            <div className="absolute top-full right-0 mt-2 w-48 bg-gray-500  shadow-lg rounded-md">
              <Link href="/casestudy" legacyBehavior>
                <a className="block py-1 hover:text-gray-300">Case Studies</a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="block py-1 hover:text-gray-300">Services</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="block py-1 hover:text-gray-300">About Us</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="block py-1 hover:text-gray-300">Contact Us</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="block py-1 hover:text-gray-300">Blog</a>
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
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gray-300">Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomePageNavBar;