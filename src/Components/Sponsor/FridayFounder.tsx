import imgSrc from "../../assets/Attender.png";

function FridayFounder() {
  return (
    <div className="w-screen min-h-[80vh] flex flex-col md:flex-row py-10 px-4 md:px-14">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={imgSrc}
          alt="Founders Friday Event"
          className="w-full h-[50vh] md:h-full rounded-xl object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:pl-10 px-4 md:px-0">
        <h2 className="text-lg md:text-xl font-bold mb-5 text-center md:text-left">
          At Founder's Friday, Every Friday Is a Learning Experience!
        </h2>
        <p className="text-xs md:text-sm mb-10 text-center md:text-left">
          Join us in our mission to transform ideas into impact and shape the
          future of Nigeria's startup landscape.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <button className="text-sm border bg-[#A649FF] text-white flex justify-center px-6 py-2 rounded-2xl">
            Register →
          </button>
        </div>
      </div>
    </div>
  );
}

export default FridayFounder;
