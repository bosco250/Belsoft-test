import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import bgImage from "../../assets/bgimage.png";
import logo from "../../assets/Logo.png";

function FridayComming() {
  const words = ["Kaduna", "Abuja", "Kano"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen min-h-[80vh] mt-14 mb-10 px-4 sm:px-6 md:px-14 flex flex-col md:flex-row"
    >
      <div className="flex w-full md:w-1/2 md:min-h-[80vh] md:pt-0 pt-20 justify-center flex-col">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">
          Founders Friday is coming to
        </h2>
        <div className="overflow-hidden h-[60px]">
          <motion.h1
            key={words[currentWordIndex]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#A649FF]"
          >
            {words[currentWordIndex]}
          </motion.h1>
        </div>
        <p className="text-xs sm:text-sm text-white font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <div>
          <button className="text-xs sm:text-sm mt-5 sm:mt-8 border border-[#A649FF] text-[#A649FF] flex justify-center px-4 sm:px-6 py-2 rounded-2xl">
            Register →
          </button>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 md:min-h-[80vh] justify-center items-center mt-10 md:mt-0">
        <img src={logo} alt="Logo" className="w-40 sm:w-60 md:w-80" />
      </div>
    </div>
  );
}

export default FridayComming;
