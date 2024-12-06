import { Plus } from "lucide-react";
import React from "react";
interface cardProps{
  title:string;
  description:string;
}

const OfferCard:React.FC<cardProps>=({title,description})=> {
  return (
    <div className="w-full justify-between pr-10 py-6 border-b border-gray-400 flex items-center gap-4">
      <div className="flex gap-5 items-center w-[25%]">
        <div className="w-3 h-3 bg-[#8300FF] rounded-full"></div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
      <div className="flex-1 max-w-[60%]">
        <p className="text-sm text-gray-500">{description}
        </p>
      </div>
      <button className="text-gray-600 hover:text-gray-800 font-bold">
        <Plus size={20} />
      </button>
    </div>
  );
}

export default OfferCard;
