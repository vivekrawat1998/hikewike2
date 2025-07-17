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
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const popularLocations = Locations.trip_collection.trips.filter(
    (loc) => loc.category === 'Popular Location'
  );

  return (
    <div className="w-full px-4 relative py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-left text-gray-800">
        Popular Locations
      </h1>

      {/* Prev Button */}
      {!isBeginning && (
        <div className="absolute top-72 -left-10 z-20">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="bg-white cursor-pointer shadow-xl text-sec p-2 rounded-full "
          >
            <FiArrowLeft size={32} />
          </button>
        </div>
      )}

      {/* Next Button */}
      {!isEnd && (
        <div className="absolute top-72 -right-10 z-20">
          <button
            ref={nextRef}
            aria-label="Next"
            className="bg-white cursor-pointer shadow-xl text-sec p-2 rounded-full "
          >
            <FiArrowRight size={32} />
          </button>
        </div>
      )}

      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={3}
          loop={false}
          speed={900}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            });
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {popularLocations.map((location) => (
            <SwiperSlide key={location.id}>
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
