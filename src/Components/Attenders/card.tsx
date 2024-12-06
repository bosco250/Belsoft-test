import profile from '../../assets/profile.png';

const Card=()=> {
  return (
    <div className='w-72 h-72  pt-10 px-5'>
      <div className="w-full h-2/3 flex flex-col justify-center items-center">
      <div
      className={`w-48 h-48 rounded-full p-2  border-[3px] border-purple-700 `}>
      <img src={profile} alt="" className="w-full  rounded-full h-full object-cover" />
    </div>
    <h1 className="text-xl font-bold text-center">Mr Belba Ngoy</h1>
    <p className="text-sm text-center text-gray-700">Always a remarkable experience for my team and myself</p>
    </div>
      
    </div>
  )
}

export default Card
