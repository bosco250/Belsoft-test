import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";
import { ArrowRight, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [slideOut, setSlideOut] = useState(false); // Controls slide animation

  const handleLinkClick = (path: string) => {
    setSlideOut(true); // Trigger slide-out animation
    setTimeout(() => {
      setActiveLink(path);
      setSlideOut(false); // Reset animation after navigation
      setIsMobileMenuOpen(false);
    }, 500); // Animation duration
  };

  const headerVariants = {
    initial: { x: 0 },
    slideOut: {
      x: "-5%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    slideIn: {
      x: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="initial"
      animate={slideOut ? "slideOut" : "slideIn"}
      className="bg-white shadow-md px-10 fixed top-0 left-0 font-medium w-screen z-50 border-b border-gray-400 text-xl"
    >
      <div className="container mx-auto py-4 flex justify-between items-center relative">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center w-1/2">
          <div className="flex grow gap-4 px-2">
            {["/", "/about", "/gallery", "/contact"].map((path, idx) => (
              <Link
                key={idx}
                to={path}
                className={`${
                  activeLink === path
                    ? "text-purple-600"
                    : "hover:text-purple-600"
                } cursor-pointer`}
                onClick={() => handleLinkClick(path)}
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
          <Link
            to="/register"
            className="flex justify-center items-center gap-3 text-purple-700 px-4 py-2 rounded-xl font-medium border border-purple-700 cursor-pointer"
            onClick={() => handleLinkClick("/register")}
          >
            <span>Register</span>
            <ArrowRight size={19} />
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-24 left-0 w-full bg-white shadow-lg z-50"
            >
              <div className="flex text-sm flex-col items-center py-6 space-y-4">
                {["/", "/about", "/gallery", "/contact"].map((path, idx) => (
                  <Link
                    key={idx}
                    to={path}
                    className={`${
                      activeLink === path ? "text-purple-600" : "text-gray-800"
                    } text-xl cursor-pointer`}
                    onClick={() => handleLinkClick(path)}
                  >
                    {path === "/"
                      ? "Home"
                      : path.charAt(1).toUpperCase() + path.slice(2)}
                  </Link>
                ))}
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
