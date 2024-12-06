import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { ArrowRight } from "lucide-react";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className="bg-white shadow-md px-10 fixed top-0 left-0 font-medium w-screen z-50 border-b border-gray-400 text-xl">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center w-1/2">
          <img src={Logo} alt="" className="w-10 mr-2" />
          <span className="text-2xl font-bold ">Founder's Friday</span>
        </Link>
        <div className="flex justify-between items-center w-1/2">
          <div className="flex grow gap-4 px-2">
            <Link
              to="/"
              className={`${
                activeLink === "/" ? "text-purple-600" : "hover:text-purple-600"
              } cursor-pointer`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                activeLink === "/about"
                  ? "text-purple-600"
                  : "hover:text-purple-600"
              } cursor-pointer`}
              onClick={() => handleLinkClick("/about")}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className={`${
                activeLink === "/gallery"
                  ? "text-purple-600"
                  : "hover:text-purple-600"
              } cursor-pointer`}
              onClick={() => handleLinkClick("/gallery")}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={`${
                activeLink === "/contact"
                  ? "text-purple-600"
                  : "hover:text-purple-600"
              } cursor-pointer`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact Us
            </Link>
          </div>
          <Link
            to="/register"
            className=" flex justify-center items-center gap-3  text-purple-700 px-4 py-2 rounded-xl font-medium border border-purple-700 cursor-pointer"
            onClick={() => handleLinkClick("/register")}
          >
            <span>Register</span><ArrowRight size={19} className=" " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
