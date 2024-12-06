import { Camera } from "lucide-react";
import whoImg from "../../assets/IMG_whow.jpg";

function About() {
  return (
    <div className="w-screen md:h-[480px] px-14 pt-10 pb-8 overflow-hidden py-5">
      <div className="flex w-full h-full gap-5">
        <div className="w-[45%] h-full">
          <img
            src={whoImg}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-[55%] py-4">
          <div className=" flex flex-col justify-between h-full  rounded-2xl shadow-md  px-6 border-l-2  border-l-purple-700">
            <div>
              <h2 className="text-xl font-bold mt-[-12px] text-gray-800 mb-10">
                Who Are We?
              </h2>
              <p className="text-[#8E8E93] mb-14">
                Born from the vibrant startup ecosystem of Abuja, we recognized
                the need for a consistent, high-quality networking platform
                where founders, innovators, and tech enthusiasts could connect,
                share ideas, and foster collaboration.
              </p>

              <div className="flex gap-[5%] mt-4">
                <button className="bg-[#A649FF] hover:bg-purple-500 font-semibold text-white  py-2 px-6 rounded-2xl flex items-center">
                  Register →
                </button>
                <button className="border border-[#A649FF] text-[#A649FF]  font-semibold gap-3 py-2 px-6 rounded-2xl flex items-center">
                  Donate <Camera className="mr-2" size={18} />
                </button>
              </div>
            </div>
            <div className="">
              <p className="text-[12px] font-semibold mb-[-10px]">
                Founder's Friday is more than just a meetup — it's a movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
