import Card from "./card";

function Faq() {
  return (
    <div className="w-screen md:px-14 px-5 py-10 border-b border-gray-400">
      <h1 className="text-2xl font-bold">FAQs</h1>
      <div className="md:p-10 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Faq;
