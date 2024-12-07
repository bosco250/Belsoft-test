import { Plus } from "lucide-react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const OfferCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="w-full grid grid-cols-12 items-center py-6 border-b border-gray-400 gap-4">
      <div className="col-span-12 sm:col-span-3 flex items-center space-x-4">
        <div className="w-3 h-3 bg-[#8300FF] rounded-full shrink-0"></div>
        <h3 className="text-base sm:text-lg font-semibold text-black ">
          {title}
        </h3>
      </div>
      
      <div className="col-span-12 sm:col-span-8 text-gray-500 text-sm">
        <p className="line-clamp-3">{description}</p>
      </div>
      
      <div className="col-span-12 sm:col-span-1 flex justify-end">
        <button className="text-gray-600 hover:text-gray-800 font-bold">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}

export default OfferCard;