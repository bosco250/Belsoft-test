
import imgSrc from '../../assets/Attender.png'
function FridayFounder() {
  return (
    <div className=' w-screen h-[80vh] flex py-10 px-14'>
      <div className="w-1/2 ">
      <img src={imgSrc} alt="" className='w-full h-full rounded-xl object-cover' />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center pl-10">
      <h2 className="text-xl font-bold mb-5">At Founder’s Friday, Every Friday Is a Learning Experience!</h2>
      <p className="text-sm mb-10">Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</p>
      <div className="w-full">
      <button className="text-sm  border bg-[#A649FF] text-white flex justify-center px-6 py-2 rounded-2xl">Register →</button>
      </div>
      </div>
      
    </div>
  )
}

export default FridayFounder
