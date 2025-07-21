import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Calendar } from "lucide-react";

// Make sure `cost` is a number (e.g., 7500), not a string like "₹7,500"
// If cost is a string with "₹", remove it: parseInt(cost.replace(/[^\d]/g, ""))
const LocationCard = ({
  id,
  images = [],
  name,
  description,
  duration,
  durationdaynight,
  date,
  cost,
}) => {
  const navigate = useNavigate();

  // Ensure cost is numeric, remove commas/₹ if present
  const numericCost =
    typeof cost === "number"
      ? cost
      : parseInt((cost || "0").replace(/[^\d]/g, ""), 10) || 0;

  // Calculate discounted price (₹2,000 off)
  const discountedCost = Math.max(numericCost - 2000, 0);

  return (
    <div
      onClick={() => navigate(`/location/${id}`)}
      className="cursor-pointer rounded-2xl  overflow-hidden font-parkinsans w-full max-w-xs mx-auto transition hover:shadow-lg"
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
        <h4 className="text-[14px] text-[#5A5A5A]">{durationdaynight}</h4>
        <h3 className="text-[16px] font-bold text-[#1F1F1F] line-clamp-1">
          {duration} to {name}
        </h3>
        {/* Discounted price UI */}
        <p className="text-[16px] mt-1  font-regular">
          <span className="text-[#09090B] font-semibold">
            ₹{discountedCost.toLocaleString("en-IN")}
          </span>
          <span className="text-[#09090B] ml-2 line-through decoration-[#F61B00]">
            ₹{numericCost.toLocaleString("en-IN")}
          </span>
          <span className="ml-0 text-[#F61B00] text-xs  px-2 py-0.5 rounded-full font-medium align-middle">
            ₹2,000 OFF
          </span>
        </p>
        {/* <div
          className="w-full"
          style={{
            borderTop: "1.5px dotted #b3b3b3", // pick your color/width
            borderTopStyle: "dotted",
            borderTopWidth: "1.5px",
            borderImage: "none",
            borderSpacing: "0",
            borderCollapse: "separate",
          }}
        ></div>

        <hr className="border-0 border-t-2 border-dotted border-gray-400 my-4" /> */}
        <span className="flex items-center gap-2 mt-2">
          <h2 className="text-gray-500 text-[14px] font-medium">📆 {date}</h2>
        </span>
      </div>
    </div>
  );
};

export default LocationCard;
