import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../public/Frame-black.png";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-black fixed top-0 left-0 right-0 z-50 font-inter font-semibld ${
        isScrolled ? "bg-white margin-0" : "bg-transparent"
      }`}
      API
      Gateway
      service
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 ml-3">
            <Image
              src={logo}
              width={1000}
              height={1000}
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className={`text-gray-400 hover:text-white focus:outline-none focus:text-white ${
              isScrolled ? "text-white" : "text-gray-400"
            }`}
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current  text-black"
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
            <div className="absolute top-full right-0 w-48 bg-gray-100  shadow-lg rounded-md font-inter">
              <Link href="/casestudy" legacyBehavior>
                <a className="block py-1 border border-top-black hover:font-bold ">
                  case studies
                </a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="block py-1 border border-top-black hover:text-gray-500">
                  services
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="block py-1 border border-top-black hover:text-gray-500">
                  about us
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="block py-1 border border-top-black hover:text-gray-500">
                  contact us
                </a>
              </Link>
              <Link href="/blogpage" legacyBehavior>
                <a className="block py-1  border border-top-black hover:text-gray-500">
                  blogs
                </a>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex  space-x-6 lg:space-x-12 mr-20 ">
          <Link
            href="/casestudy"
            className="hover:text-gray-400 md:text-xl  xxl:text-2xl inter tracking-wide"
          >
            case studies
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-400 md:text-xl  xxl:text-2xl inter tracking-wide "
          >
            services
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 md:text-xl  xxl:text-2xl inter tracking-wide "
          >
            about us
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 md:text-xl  xxl:text-2xl inter tracking-wide  "
          >
            contact us
          </Link>
          <Link
            href="/blogpage"
            className="hover:text-gray-400 md:text-xl  xxl:text-2xl inter tracking-wide  "
          >
            blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
