import React from 'react'
interface myprops{
  bgcolor:string;
  title:string;
  description:string;
}
const CircleCard:React.FC<myprops>=({bgcolor,title,description})=>{
  return (
    <div style={{backgroundColor:bgcolor}}
     className={`md:w-44 md:h-44 w-36 h-36 rounded-full border border-purple-700 md:p-5 p-1 flex flex-col justify-center items-center bg-${bgcolor}`}>
      <h1 className="md:text-lg text-[15px] font-bold text-center">{title}</h1>
      <p className="md:text-[12px] text-[10px] text-center text-[#3C3641]">{description}</p>
    </div>
  )
}

export default CircleCard
