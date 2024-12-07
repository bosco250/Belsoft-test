import whoImg from "../../assets/IMG_whow.jpg";
import { FaSackDollar } from "react-icons/fa6";

function About() {
  return (
    <div className="w-full px-4 md:px-14 py-10 overflow-hidden">
      <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row w-full gap-5">
        <div className="w-full md:w-[45%] mb-6 md:mb-0">
          <img
            src={whoImg}
            alt="About Us"
            className="w-full h-auto md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-[55%]">
          <div className="flex flex-col justify-between h-full rounded-2xl shadow-md px-4 md:px-6 border-l-2 border-l-purple-700">
            <div>
              <h2 className="text-lg md:text-xl font-bold -mt-3 text-gray-800 mb-4 md:mb-10">
                Who Are We?
              </h2>
              <p className="text-[#8E8E93] mb-6 md:mb-14 text-sm md:text-base">
                Born from the vibrant startup ecosystem of Abuja, we recognized
                the need for a consistent, high-quality networking platform
                where founders, innovators, and tech enthusiasts could connect,
                share ideas, and foster collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-[5%] mt-4">
                <button className="bg-[#A649FF] hover:bg-purple-500 font-semibold text-white py-2 px-6 rounded-2xl flex items-center justify-center">
                  Register →
                </button>
                <button className="border border-[#A649FF] text-[#A649FF] font-semibold gap-3 py-2 px-6 rounded-2xl flex items-center justify-center">
                  <span>Donate</span>
                  <FaSackDollar size={16} className="text-[#A649FF] ml-2" />
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-xs md:text-[12px] font-semibold -mb-4 md:-mb-2 text-center md:text-left">
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