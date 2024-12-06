import React from 'react'
interface myprops{
  bgcolor:string;
  title:string;
  description:string;
}
const CircleCard:React.FC<myprops>=({bgcolor,title,description})=>{
  return (
    <div style={{backgroundColor:bgcolor}}
     className={`w-44 h-44 rounded-full border border-purple-700 p-5 flex flex-col justify-center items-center bg-${bgcolor}`}>
      <h1 className="text-lg font-bold text-center">{title}</h1>
      <p className="text-[12px] text-center text-[#3C3641]">{description}</p>
    </div>
  )
}

export default CircleCard
