import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";
import { ArrowRight, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md px-10 fixed top-0 left-0 font-medium w-screen z-50 border-b border-gray-400 text-xl"
    >
      <div className="container mx-auto py-4 flex justify-between items-center relative">
        {/* Logo Section - Unchanged */}
        <Link to="/" className="flex items-center w-1/2">
          <img src={Logo} alt="" className="w-10 mr-2" />
          <span className="text-2xl font-bold">Founder's Friday</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute top-1/2 right-0 transform -translate-y-1/2">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-purple-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation - Unchanged Structure */}
        <div className="hidden md:flex justify-between items-center w-1/2">
          <div className="flex grow gap-4 px-2">
            <Link
              to="/"
              className={`${
                activeLink === "/" ? "text-purple-600" : "hover:text-purple-600"
              } cursor-poin`}
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
              } cursor-poin`}
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
              } cursor-poin`}
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
              } cursor-poin`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact Us
            </Link>
          </div>
          <Link
            to="/register"
            className="flex justify-center items-center gap-3 text-purple-700 px-4 py-2 rounded-xl font-medium border border-purple-700 cursor-pointer"
            onClick={() => handleLinkClick("/register")}
          >
            <span>Register</span>
            <ArrowRight size={19} className="" />
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="md:hidden fixed top-24 left-0 w-full bg-white shadow-lg z-50"
            >
              <div className="flex text-sm flex-col items-center py-6 space-y-4">
                <Link
                  to="/"
                  className={`${
                    activeLink === "/" ? "text-purple-600" : "text-gray-800"
                  } text-xl cursor-pointer`}
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`${
                    activeLink === "/about"
                      ? "text-purple-600"
                      : "text-gray-800"
                  } text-xl cursor-pointer`}
                  onClick={() => handleLinkClick("/about")}
                >
                  About Us
                </Link>
                <Link
                  to="/gallery"
                  className={`${
                    activeLink === "/gallery"
                      ? "text-purple-600"
                      : "text-gray-800"
                  } text-xl cursor-pointer`}
                  onClick={() => handleLinkClick("/gallery")}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className={`${
                    activeLink === "/contact"
                      ? "text-purple-600"
                      : "text-gray-800"
                  } text-xl cursor-pointer`}
                  onClick={() => handleLinkClick("/contact")}
                >
                  Contact Us
                </Link>
                <Link
                  to="/register"
                  className="flex justify-center items-center gap-3 text-purple-700 px-4 py-2 rounded-xl font-medium border border-purple-700 cursor-pointer"
                  onClick={() => handleLinkClick("/register")}
                >
                  <span>Register</span>
                  <ArrowRight size={19} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Header;