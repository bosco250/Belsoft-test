import { ChevronDown } from "lucide-react"

function Card() {
  return (

    <div className="flex  items-center">
    <div className="flex">
    <p className="text-sm font-bold text-[#340066] text-end">Lorem ipsum dolor sit amet, consectetur adi elit.</p>
    <button><ChevronDown className=" text-sm font-bold text-[#340066]" /></button>
    </div>
    </div>
  )
}

export default Card
