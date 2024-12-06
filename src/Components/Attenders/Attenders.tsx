import { ArrowLeft, ArrowRight } from "lucide-react";
import Card from "./card";

function Attenders() {
  return (
    <div className="w-screen px-14 relative py-10">
      <h1 className=" w-full text-2xl font-bold text-center">
        What Do Our Attendees Have To Say?
      </h1>
      <p className="text-sm text-gray-700 w-full text-center">
        Well See For Yourself!
      </p>
      <div className="absolute top-12 right-14 flex gap-5">
        <div className="w-10 h-10 rounded-full p-2 border border-purple-600">
          <ArrowLeft className=" w-full h-full " />
        </div>
        <div className="w-10 h-10 rounded-full p-2 border border-purple-600">
          <ArrowRight className=" w-full h-full " />
        </div>
      </div>

      <div className="w-full flex justify-between pt-10">
      <Card/><Card/><Card/>
      </div>
    </div>
  );
}

export default Attenders;
