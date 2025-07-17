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
      className="cursor-pointer relative rounded-3xl overflow-hidden transition transform max-w-[30vw] h-[46vh] mx-auto bg-white shadow-md"
    >
      <div className="relative w-full h-72">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="rounded-3xl w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${name} ${index + 1}`}
                className="w-full h-72 object-cover rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-5 text-start px-3">
        <h2 className="text-xl font-bold font-poppins text-gray-900">{name}</h2>
        <p className="text-gray-700 text-sm mt-1 leading-relaxed">{description}</p>
        <div className="mt-1 text-sm text-gray-800">
          <p><span className="text-sec font-bold">{cost}</span></p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
