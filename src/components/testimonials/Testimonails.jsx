import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fecthTestimonial } from "../../redux/slice/Testimonials.slice";

const Testimonials = () => {
  const dispatch = useDispatch();
  const { testimonial, loading, error } = useSelector((state) => state?.testimonial || {})

  useEffect(() => {
    dispatch(fecthTestimonial());
  }, [dispatch])
  
  return (
    <div className="w-full mx-auto bg-[#F5F0E3] py-24 rounded-lg shadow-lg p-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {testimonial.map((test, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center px-4">
              <p className="mb-6 text-[#595132] text-lg font-medium italic ">
                "{test?.comment}"
              </p>
              <img
                src={test?.images?.[0]?.url}
                alt={test.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-[#e5cd97]"
                draggable="false"
              />
              <h3 className="text-[#5c501a] font-bold text-xl">{test.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
