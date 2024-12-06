import Card from "./card"

function Faq() {
  return (
    <div className="w-screen px-14 py-10 border-b border-gray-400">
      <h1 className="text-2xl font-bold">FAQs</h1>
      <div className="p-10 flex flex-wrap justify-between gap-5">
      <Card/><Card/><Card/><Card/><Card/><Card/>
      </div>
      
    </div>
  )
}

export default Faq
