import bgImage from "../../assets/bgimage.png";
import logo from '../../assets/Logo.png'

function FridayComming() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen min-h-[80vh] mt-14 mb-10 px-14 flex"
    >
      <div className="flex w-1/2 min-h-[80vh] justify-center  flex-col">
        <h2 className="text-2xl font-bold text-white">
          Founders Friday is coming to
        </h2>
        <h1 className="text-6xl font-bold text-[#A649FF] pb-5">Kaduna</h1>
        <p className="text-sm text-white font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. 
        </p>
        <div>
        <button className="text-sm mt-10 border border-[#A649FF] text-[#A649FF] flex justify-center px-6 py-2 rounded-2xl">Register →</button>
        </div>
        </div>
      <div className="flex w-1/2 min-h-[80vh] justify-center items-center">
      <img src={logo} alt="" className="w-80"/>
      </div>
    </div>
  );
}

export default FridayComming;
