import profile from '../../assets/profile.png';

const Card = () => {
  return (
    <div className='w-full sm:w-72 h-auto sm:h-72 pt-5 sm:pt-10 px-3 sm:px-5'>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className={`w-32 h-32 sm:w-48 sm:h-48 rounded-full p-1 sm:p-2 border-[2px] sm:border-[3px] border-purple-700`}>
          <img 
            src={profile} 
            alt="Profile" 
            className="w-full rounded-full h-full object-cover" 
          />
        </div>
        <h1 className="text-base sm:text-xl font-bold text-center mt-2 sm:mt-0">
          Mr Belba Ngoy
        </h1>
        <p className="text-xs sm:text-sm text-center text-gray-700 px-2">
          Always a remarkable experience for my team and myself
        </p>
      </div>
    </div>
  )
}

export default Card;