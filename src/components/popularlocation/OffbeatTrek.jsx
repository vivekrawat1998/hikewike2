import React, { useEffect, useState } from "react";
import LocationCard from "./Locationcards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Locations from "../utils/Locationss.json";

const OffbeatTrek = () => {
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const popularLocations = Locations.trip_collection.trips.filter(
    (loc) => loc.category === "Offbeat Trek"
  );

  return (
    <div className="w-full px-4 relative py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-left text-gray-800">
        OffBeat Trek Locations
      </h1>
      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          speed={600}
          loop={false}
          slidesPerGroup={1}
          // No navigation property here
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
            <SwiperSlide key={location.id}>
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
      )}
    </div>
  );
};

export default OffbeatTrek;
