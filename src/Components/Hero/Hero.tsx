import ArrowImage from "../../assets/Right arrow.png";
import CofeOne from "../../assets/one.png";
import two from "../../assets/mawitch.png";
import three from "../../assets/three.png";
import four from "../../assets/boldspace.png";
import five from "../../assets/five.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import MyImage from "../../assets/IMG_11111.png";
import MyImage1 from "../../assets/Img_33333.png";
import MyImage2 from '../../assets/IMG_2222.png'
import MyImage4 from "../../assets/image 1.png";
import Card from "./Card";

function Hero() {
  return (
    <div className="px-14 max-w-screen-xl  mx-auto py-12  mt-20 flex overflow-hidden">
      <div className="w-full flex">
        <div className="w-[60%] flex flex-col">
          <p className="text-[12px] font-semibold">
            Join our premier monthly meetup for startup founders and tech
            visionaries
          </p>
          <h1 className="text-4xl font-bold text-purple-700 mb-5">
            Connect, Collaborate, Innovate!
          </h1>
          <p className="text-[17px] font-medium mb-10">
            Every last Friday of the month, we bring together the brightest
            minds in our local tech ecosystem. Whether you're a seasoned
            entrepreneur or just starting your journey, Founder's Friday is your
            launchpad for new ideas, valuable connections, and game-changing
            opportunities.
          </p>
          <div className="mb-6">
          <button className="flex mt-10 justify-center items-center font-medium mb-2 text-xl px-5 py-2 gap-3 text-purple-700 border border-purple-700 rounded-3xl">
          <span>Register For Our Next Event</span>
          <img src={ArrowImage} alt="" className="w-5" />
        </button>
            <p className="text-[12px] font-semibold text-purple-600">
              Join Us for our next meetup on the 26th of July 2024
            </p>
          </div>
          <div className="flex gap-6 mt-8 ">
            <div className="w-16 h-16 rounded-full">
              <img src={CofeOne} alt="" className="w-full" />
            </div>
            <div className="w-16 h-16 rounded-full">
              <img src={two} alt="" className="w-full" />
            </div>
            <div className="w-16 h-16 rounded-full">
              <img src={three} alt="" className="w-full" />
            </div>
            <div className="w-16 h-16 rounded-full">
              <img src={four} alt="" className="w-full" />
            </div>
            <div className="w-16 h-16 rounded-full">
              <img src={five} alt="" className="w-full" />
            </div>
          </div>
          <p className="text-[12px] font-semibold flex gap-4 mt-4">
            <span>Become a collaborator today</span>{" "}
            <BsBoxArrowUpRight size={15} />
          </p>
        </div>

        <div className="image-container w-[40%]  relative">
          <div className="absolute top-16 left-5 z-0">
          <Card
            imageSrc={MyImage}
            width="200px"
            height="100px"
            rotation="-10deg"
          />
          </div>
          <div className="absolute top-36 left-40 z-1">
          <Card
            imageSrc={MyImage4}
            width="250px"
            height="150px"
            rotation="-5deg"
          />
          </div>
          <div className="absolute top-72 left-4 z-1">
          <Card
            imageSrc={MyImage2}
            width="150px"
            height="80px"
            rotation="0deg"
          />
          </div>
          <div className="absolute top-96 left-52 z-1">
          <Card
            imageSrc={MyImage1}
            width="100px"
            height="50px"
            rotation="0deg"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
