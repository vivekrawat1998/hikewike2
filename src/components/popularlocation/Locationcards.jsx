import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const LocationCard = ({
  id,
  images = [],
  name,
  description,
  duration,
  cost,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/location/${id}`)}
      className="cursor-pointer  rounded-2xl overflow-hidden font-parkinsans w-full max-w-xs mx-auto transition "
    >
      {/* Image Carousel */}
      <div className="relative w-full h-48 sm:h-56">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 10000 }}
          loop
          slidesPerView={1}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${name} ${index + 1}`}
                className="w-full h-full rounded-2xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text Content */}
      <div className="p-3">
        <h3 className="text-md font-semibold text-gray-900 line-clamp-1">
          {duration} to {name}
        </h3>
        {/* <p className="text-xs text-gray-600 mt-1 line-clamp-2">{description}</p> */}
        <p className="text-md text-gray-800 mt-1 font-semibold">{cost}</p>
      </div>
    </div>
  );
};

export default LocationCard;
