import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Search } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  'https://t.eucdn.in/tourism/lg/rudranath-3584027.webp',
  'https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDle_trulrLcBypLJMOizlHCmKS8kpJb0Xg&s',
];

const Hero = () => {
  return (
    <div className="relative w-full grid place-items-center h-[70vh] text-white overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="absolute inset-0 w-full h-screen z-0 pointer-events-none"
      >
        {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="absolute z-999 border-2 w-full flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className=" lg:text-[4rem] font-semibold mb-8 mt-20 md:mt-0 drop-shadow-xl">
          Find your outside
        </h1>
        <div className="flex items-center bg-white/90 text-gray-700 w-3xl rounded-full px-6 py-5 shadow-xl backdrop-blur-md border border-white/20 mb-6">
          <Search className="text-gray-400 mr-3 w-6 h-6" />
          <input
            type="text"
            placeholder="Search by city, park, or trail name"
            className="flex-1 outline-none bg-transparent text-lg"
          />
        </div>
        <button className="underline hover:text-green-400 transition text-lg">
          Explore nearby trails
        </button>
      </div>
    </div>
  );
};

export default Hero;
