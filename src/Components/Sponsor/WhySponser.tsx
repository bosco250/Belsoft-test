import CircleCard from "./CircleCard";
function WhySponser() {
  return (
    <div className=" w-screen px-14 py-10">
      <p className="text-sm font-bold text-[#8300FF]">
        Sponsor The Next Friday
      </p>
      <div className="w-full flex justify-center items-center pt-5 pb-14">
        <h1 className="w-[25%] text-2xl font-bold">
          Why Sponsor Founders Friday?
        </h1>
      </div>
      <div className="w-full flex  gap-10 pl-[100px]">
        <div className="w-[40%] p-3 items-center gap-3 flex justify-center flex-wrap border border-gray-500 rounded-2xl">
          <CircleCard
            bgcolor="#DCB6FF"
            title="Networking Opportunities"
            description="Connect with industry leaders, founders, and potential partners."
          />
          <CircleCard
            bgcolor="#EDDBFF"
            title="Community Impact"
            description="Support the growth and development of the startup ecosystem."
          />
          <CircleCard
            bgcolor="#EDDBFF"
            title="Brand Association"
            description="Align your brand with innovation and entrepreneurial success."
          />
          <CircleCard
            bgcolor="#DCB6FF"
            title="Visibility"
            description="Gain exposure to a targeted audience of young professionals and entrepreneurs."
          />
        </div>
        <div className="w-1/2 grow px-5">
          <p className="text-xl font-bold">How To Sponsor</p>
          <p className="text-xl font-normal italic text-[#605668]">
            Ready to Make an Impact?
          </p>
          <p className="text-[12px] mb-5 ">
            Fill out the form below or contact us at [contact email/phone
            number] to learn more about how you can sponsor the next Founders
            Friday
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-10">
              <div className="flex flex-col">
                <p className="text-sm font-bold">Name</p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="border border-gray-400  rounded-lg px-4 py-2"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold">Company <span className="text-sm font-normal text-gray-600">(optional)</span></p>
                <input
                  type="text"
                  placeholder="Company name"
                  className="border border-gray-400 rounded-lg px-4 py-2"
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <p className="text-sm font-bold">Email</p>
                <input
                  type="text"
                  placeholder="Email address"
                  className="border border-gray-400 rounded-lg px-4 py-2"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold">Phone</p>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border border-gray-400 rounded-lg px-4 py-2"
                />
              </div>
            </div>
            <div className="">
              <button className="text-sm font-medium px-5 py-3 rounded-md bg-purple-700 text-white">Sponsor →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhySponser;
