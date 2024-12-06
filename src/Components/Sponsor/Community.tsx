import Vector from '../../assets/Vector2.png'
import Card from './Card'
function Community() {
  return (
    <div className='w-screen min-h-[70vh] relative pt-10 px-14 mb-20'>
      <div className=" w-full flex  flex-col items-center">
        <h1 className="w-full text-2xl font-bold text-center mb-3">Register And Be Part of Our Community</h1>
        <p className=" w-1/2 text-sm text-gray-700 text-center">Join our community of over 1000+ founders, developers, and tech junkies in general.Be inspired by people who live to inspire!</p>
      </div>



      <div  style={{
      backgroundImage:`url(${Vector})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
    }}
      className="w-screen absolute bottom-0 h-[215px] left-0 z-10 p-2 px-10">
        <Card 
        borderCorol='#8300FF'
        top='60'
        left='0'
        />
        <Card 
        borderCorol='#2F6C62'
        top='-50'
        left='200'
        />
      <Card 
        borderCorol='#FF3B30'
        bottom='-150'
        left='350'
        /><Card 
        borderCorol='#007AFF'
        bottom='-150'
        left='550'
        />
        <Card 
        borderCorol='#FF3B30'
        bottom='-150'
        left='750'
        />
        <Card 
        borderCorol='#007AFF'
        top='-50'
        left='920'
        /><Card 
        borderCorol='#FF9500'
        top='60'
        left='1100'
        />
      </div>
      <div className="w-[95%] absolute -bottom-16 flex justify-center ">
      <button className="text-sm border border-[#A649FF] text-[#A649FF] flex justify-center px-6 py-2 rounded-2xl">Register →</button>
    </div>
    </div>
  )
}

export default Community
