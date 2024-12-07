import Vector from '../../assets/Vector2.png';
import Card from './Card';

function Community() {
  return (
    <div className="w-screen min-h-[70vh] relative pt-10 px-4 sm:px-6 md:px-14 mb-20">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center">
        <h1 className="w-full text-lg sm:text-xl md:text-2xl font-bold text-center mb-3">
          Register And Be Part of Our Community
        </h1>
        <p className="w-full sm:w-3/4 md:w-1/2 text-xs sm:text-sm text-gray-700 text-center">
          Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!
        </p>
      </div>

      {/* Background with Cards */}
      <div
        style={{
          backgroundImage: `url(${Vector})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-screen absolute md:bottom-0 bottom-1/2 md:h-[215px] h-14 left-0 z-10 p-2 px-4 sm:px-10"
      >
        {/* Large Screen Cards */}
        <div className="hidden md:block relative w-full h-full">
          <Card borderCorol="#8300FF" top="60" left="50" />
          <Card borderCorol="#2F6C62" top="-50" left="250" />
          <Card borderCorol="#FF3B30" bottom="-150" left="400" />
          <Card borderCorol="#007AFF" bottom="-150" left="600" />
          <Card borderCorol="#FF3B30" bottom="-150" left="800" />
          <Card borderCorol="#007AFF" top="-50" left="970" />
          <Card borderCorol="#FF9500" top="60" left="1150" />
        </div>

        {/* Small Screen Cards */}
        <div className="block md:hidden relative w-full h-full">
          <Card borderCorol="#8300FF" top="30" left="40" />
          <Card borderCorol="#2F6C62" top="30" left="170" />
          <Card borderCorol="#FF3B30" bottom="10" left="170" />
          <Card borderCorol="#2F6C62" bottom="10" left="50" />
          <Card borderCorol="#FF9500" bottom="10" left="300" />
          <Card borderCorol="#2F6C62" top="30" left="320" />
          <Card borderCorol="#FF3B30" top="150" left="170" />
        </div>
      </div>

      {/* <div className="hidden md:block lg:hidden relative w-full h-full">
          <Card borderCorol="#8300FF" top="60" left="50" />
          <Card borderCorol="#2F6C62" top="-50" left="250" />
          <Card borderCorol="#FF3B30" bottom="-150" left="400" />
          <Card borderCorol="#007AFF" bottom="-150" left="600" />
          <Card borderCorol="#FF3B30" bottom="-150" left="800" />
          <Card borderCorol="#007AFF" top="-50" left="970" />
          <Card borderCorol="#FF9500" top="60" left="1150" />
        </div> */}

      {/* Register Button */}
      <div className="w-full absolute md:-bottom-16 bottom-0 flex justify-center">
        <button className="text-xs sm:text-sm border border-[#A649FF] text-[#A649FF] flex justify-center px-4 sm:px-6 py-2 rounded-2xl">
          Register →
        </button>
      </div>
    </div>
  );
}

export default Community;
