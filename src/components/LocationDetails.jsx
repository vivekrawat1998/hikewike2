import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Locations from "../components/utils/Locationss.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookNowCard from "./Bookingcard";
import ItineraryBreakdown from "./locationdetails/Itenary";
import { DoorClosed, FolderClosedIcon, LucideSidebarClose, X } from "lucide-react";

const LocationDetails = () => {
  const { id } = useParams();
  const [Model, setModel] = useState(false)
  const location = Locations.trip_collection.trips.find(
    (loc) => loc.id === parseInt(id)
  );

  if (!location) {
    return (
      <p className="text-center text-red-600 text-xl mt-10">
        Location not found
      </p>
    );
  }

  const { name, images, itinerary, description, date, duration_days, estimated_cost, category } =
    location;
  console.log(itinerary)
  const [openDay, setOpenDay] = useState(null);

  return (
    <div className="max-w-7xl relative pt-28 md:pt-44 mx-auto px-4 py-10">
      {/* Title */}
      {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        {name}
      </h1> */}

      {/* Responsive Images Section */}
      <div className="mb-10">
        {/* Carousel for small screens */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop
            className="w-full h-[300px] rounded-xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grid for large screens */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 row-span-2">
            <img
              src={images[0]}
              alt={name}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
          {images.slice(1, 5).map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`${name} ${i + 2}`}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8">

        <div className="md:col-span-2 ">
          <h1 className="font-parkinsans text-[30px] mb-4 font-semibold text-[#09090B] mt-4"> About the {name} </h1>
          <p className="font-parkinsans font-regular text-[#09090B
]" >{description.slice(0, 198)}......</p>
          <button onClick={() => setModel(true)} className="underline text-prime font-bold  cursor-pointer mt-4">Read more</button>
          <ItineraryBreakdown itinerary={itinerary} />
        </div>

        <div className="md:col-span-1 mt-10">
          <div className="md:sticky md:top-34">
            <BookNowCard
            date={date}
            estimatedcost= {estimated_cost}
            />
          </div>
        </div>
      </div>

      {Model && (
        <div
          onClick={() => setModel(false)}
          className="fixed inset-0 z-50 font-parkinsans flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-3xl w-full p-8 shadow-lg relative mx-4"
          >
            <div
              onClick={() => setModel(false)}
              className="absolute top-4 right-4 border-2 grid place-items-center rounded-full w-7 h-7 text-gray-600 hover:text-gray-900 text-2xl font-bold cursor-pointer"
              aria-label="Close modal"
            >
              <X />
            </div>
            <h2 className="text-xl font-semibold mb-4">About the {name}</h2>
            <p className="whitespace-pre-line text-gray-800">{description}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default LocationDetails;
