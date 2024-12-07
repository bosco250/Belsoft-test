import logo from "../../assets/logoFot.png";
import ArrowImage from "../../assets/Right arrow.png";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className="w-screen pt-5 px-5 md:px-14 mb-2">
      {/* Logo */}
      <div className="flex justify-center md:justify-start mb-5">
        <img src={logo} alt="Logo" className="w-20" />
      </div>

      {/* Central Section */}
      <div className="flex flex-col justify-center items-center w-full text-center h-auto md:h-[50vh]">
        <h1 className="text-xl md:text-2xl font-bold w-full md:w-1/2 px-4 md:px-0">
          Want To Be A Part Of Abuja’s Biggest Tech Community?
        </h1>
        <button className="flex mt-5 md:mt-10 justify-center items-center font-medium mb-2 text-lg md:text-xl px-4 md:px-5 py-2 gap-3 text-purple-700 border border-purple-700 rounded-3xl">
          <span>Register For Our Next Event</span>
          <img src={ArrowImage} alt="Arrow Icon" className="w-4 md:w-5" />
        </button>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-gray-400" />

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start pt-3">
        {/* Social Icons */}
        <div className="flex gap-3 mb-3 md:mb-0">
          <div className="w-10 h-10 bg-[#9524FF] rounded-full flex justify-center items-center">
            <FaFacebook className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-[#9524FF] rounded-full flex justify-center items-center">
            <FaInstagram className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-[#9524FF] rounded-full flex justify-center items-center">
            <FaXTwitter className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-end grow">
          <Link
            to="/"
            className={`${
              activeLink === "/"
                ? "text-purple-600"
                : "hover:text-purple-600 text-gray-700"
            } text-sm md:text-base cursor-pointer`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              activeLink === "/about"
                ? "text-purple-600"
                : "hover:text-purple-600 text-gray-700"
            } text-sm md:text-base cursor-pointer`}
            onClick={() => handleLinkClick("/about")}
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className={`${
              activeLink === "/gallery"
                ? "text-purple-600"
                : "hover:text-purple-600 text-gray-700"
            } text-sm md:text-base cursor-pointer`}
            onClick={() => handleLinkClick("/gallery")}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={`${
              activeLink === "/contact"
                ? "text-purple-600"
                : "hover:text-purple-600 text-gray-700"
            } text-sm md:text-base cursor-pointer`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
