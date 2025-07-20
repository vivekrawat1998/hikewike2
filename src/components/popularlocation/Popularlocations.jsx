import React from "react";
import LocationCard from "./Locationcards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Locations from "../utils/Locationss.json";

const PopularLocations = () => {
  const popularLocations = Locations.trip_collection.trips.filter(
    (loc) => loc.category === "Popular Location"
  );

  return (
    <div className="w-full px-4 md:px-8 font-parkinsans lg:px-10 xl:px-0 relative py-16 max-w-7xl mx-auto">
      <div className="flex items-center mb-8 gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold  text-left text-gray-800">
          Upcomming Trips
        </h1>
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/emoji/48/backpack-emoji.png"
          alt="backpack-emoji"
        />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        speed={600}
        loop={false}
        slidesPerGroup={1}
        // Removed navigation prop
        breakpoints={{
          0: { slidesPerView: 1.3 },
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {popularLocations.map((location) => (
          <SwiperSlide key={location.id} className="pb-6">
            <LocationCard
              id={location.id}
              images={location.images || []}
              name={location.name}
              description={location.itinerary?.[0]?.activities?.[0] || ""}
              duration={`${location.duration_days} Days`}
              cost={location.estimated_cost}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularLocations;
