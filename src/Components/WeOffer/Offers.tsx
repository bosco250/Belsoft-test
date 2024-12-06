import OfferCard from "./OfferCard";
import Image1 from '../../assets/IMG_2501 3.png'
import Image2 from '../../assets/IMG_2519 2.png'
import Image3 from '../../assets/Vector 3.png'
function Offers() {
  return (
    <div className="w-screen px-14 py-16 ">
      <h1 className="w-full text-center font-bold text-2xl mb-10">
        What We Offer
      </h1>
      <div className="flex flex-col gap-5">
        <OfferCard
          title="Monthly Meetups "
          description="Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities."
        />
        <OfferCard
          title="Diverse Network "
          description="Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts."
        />
        <OfferCard
          title="Knowledge Sharing"
          description="
          Our cornerstone event, held on the last Friday of every month,
          featuring keynote speakers, panel discussions, and ample networking
          opportunities."
        />
        <OfferCard
          title="Collaboration   Opportunities "
          description="Find potential co-founders, mentors, or partners for your next big venture."
        />
        <OfferCard
          title="Community Support "
          description="Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges."
        />
      </div>

      <div className=" lineBefore w-full pt-24 flex min-h-[90vh] relative">
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-[#8300FF]">Founders Friday</h2>
          <h1 className="w-1/2 text-2xl font-bold pb-10">
            What Happens At Founders Friday
          </h1>
          <p className="text-sm text-[#4C4452] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. 
          </p>
          <button className="text-sm text-white bg-[#8300FF] flex justify-center px-5 py-2 rounded-xl">Learn More →</button>
        </div>
        <div className="w-1/2 relative">
        <img src={Image1} alt="" className="absolute w-60 top-[-10px] right-0 z-10 " />
        <img src={Image2} alt="" className=" absolute w-60 bottom-0 left-[33%] z-20" />
        </div>
        <img src={Image3} alt="" className=" absolute top-0 left-[-55px] w-[100%] h-[100%] " />
      </div>
    </div>
  );
}

export default Offers;
