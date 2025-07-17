import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const LocationCard = ({ id, images = [], name, description, duration, cost }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/location/${id}`)}
      className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md w-full max-w-xs mx-auto transition hover:shadow-lg"
    >
      {/* Image Carousel */}
      <div className="relative w-full h-48 sm:h-56">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional: Tag (like "Guest favourite") */}
        <div className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          Guest favourite
        </div>

        {/* Optional: Wishlist Heart */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm">
          ❤️
        </div>
      </div>

      {/* Text Content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{name}</h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{description}</p>
        <p className="text-sm text-gray-800 mt-1 font-medium">{cost} • {duration}</p>
        {/* Optional: Rating */}
        <div className="text-sm text-yellow-600 mt-1">★ 4.9</div>
      </div>
    </div>
  );
};

export default LocationCard;
