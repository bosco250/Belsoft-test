import { ArrowLeft, ArrowRight } from "lucide-react";
import Card from "./card";

function Attenders() {
  return (
    <div className="w-screen px-4 md:px-14 relative py-10">
      <h1 className="w-full text-lg md:text-2xl font-bold text-center">
        What Do Our Attendees Have To Say?
      </h1>
      <p className="text-xs md:text-sm text-gray-700 w-full text-center">
        Well See For Yourself!
      </p>
      <div className="absolute md:top-12 bottom-0 right-4 md:right-14 flex gap-3 md:gap-5">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full p-1 md:p-2 border border-purple-600">
          <ArrowLeft className="w-full h-full" />
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full p-1 md:p-2 border border-purple-600">
          <ArrowRight className="w-full h-full" />
        </div>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 justify-between pt-10">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Attenders;