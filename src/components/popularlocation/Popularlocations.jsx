import React, { useRef, useEffect, useState } from 'react';
import LocationCard from './Locationcards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Locations from '../utils/Locationss.json';

const PopularLocations = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const popularLocations = Locations.trip_collection.trips.filter(
    (loc) => loc.category === 'Popular Location'
  );

  return (
    <div className="w-full px-4 md:px-8 lg:px-10 xl:px-0 relative py-16 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-left text-gray-800">
        Popular Locations
      </h1>

      {/* Navigation Buttons (conditionally rendered based on swiper state) */}
      {!isBeginning && (
        <button
          ref={prevRef}
          aria-label="Previous"
          className="hidden sm:flex items-center justify-center absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-6 md:-left-8 z-20 bg-white text-sec shadow-md p-2 rounded-full"
        >
          <FiArrowLeft size={24} />
        </button>
      )}

      {!isEnd && (
        <button
          ref={nextRef}
          aria-label="Next"
          className="hidden sm:flex items-center justify-center absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-6 md:-right-8 z-20 bg-white text-sec shadow-md p-2 rounded-full"
        >
          <FiArrowRight size={24} />
        </button>
      )}

      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          speed={600}
          loop={false}
          slidesPerGroup={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }, 0);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {popularLocations.map((location) => (
            <SwiperSlide key={location.id} className="pb-6">
              <LocationCard
                id={location.id}
                images={location.images || []}
                name={location.name}
                description={location.itinerary?.[0]?.activities?.[0] || ''}
                duration={`${location.duration_days} Days`}
                cost={location.estimated_cost}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PopularLocations;
