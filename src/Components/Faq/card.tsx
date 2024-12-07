import  { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
      {/* Header Section */}
      <div
        className="flex justify-between items-center cursor-pointer p-4 border-b"
        onClick={toggleCard}
      >
        <p className="text-xs sm:text-sm font-bold text-[#340066] flex-grow pr-4">
          Lorem ipsum dolor sit amet, consectetur adi elit.
        </p>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? (
            <ChevronUp className="text-sm font-bold text-[#340066] flex-shrink-0" />
          ) : (
            <ChevronDown className="text-sm font-bold text-[#340066] flex-shrink-0" />
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden bg-gray-50"
      >
        <div className="p-4 text-xs sm:text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi
          omnis deleniti voluptatibus maiores aspernatur officia, dolorum
          voluptate minima hic, unde dolore eum eius? Sequi impedit deserunt
          placeat autem ut.
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
