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
    <div className="w-screen pt-5 px-14 mb-2">
      <img src={logo} alt="" className="w-20" />
      <div className="flex flex-col justify-center items-center w-full h-[50vh]">
        <h1 className="text-2xl font-bold text-center w-1/2">
          Want To Be A Part Of Abuja’s Biggest Tech Community?
        </h1>
        <button className="flex mt-10 justify-center items-center font-medium mb-2 text-xl px-5 py-2 gap-3 text-purple-700 border border-purple-700 rounded-3xl">
          <span>Register For Our Next Event</span>
          <img src={ArrowImage} alt="" className="w-5" />
        </button>
      </div>
      <hr className=" w-full border-t border-gray-400" />
      <div className="w-full flex justify-between pt-3">
        <div className=" flex gap-3 w-1/2 ">
          <div className="w-10 h-10 bg-[#9524FF] rounded-full flex justify-center items-center p-2">
            <FaFacebook className=" w-full h-full text-white" />{" "}
          </div>
          <div className="w-10 h-10 bg-[#9524FF] rounded-full flex justify-center items-center p-2">
            {" "}
            <FaInstagram className=" text-white h-full w-full" />
          </div>
          <div className="w-10 h-10 bg-[#9524FF] rounded-full flex justify-center items-center p-2">
            <FaXTwitter className=" text-white h-full w-full" />{" "}
          </div>
        </div>
        <div className="flex w-1/2 items-center grow gap-4 px-2 justify-end">
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
      </div>
    </div>
  );
}

export default Footer;
