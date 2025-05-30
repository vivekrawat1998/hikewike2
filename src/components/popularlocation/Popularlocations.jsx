import React, { useRef, useEffect, useState } from 'react';
import LocationCard from './Locationcards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'; // arrow icons

const locations = [
  {
    id: 1,
    name: 'Nainital',
    image: 'https://www.stayvista.com/blog/wp-content/uploads/2024/07/19421484519_dd4e3f4009_b-1.jpg',
    description: 'A beautiful hill station with a scenic lake in the heart of Uttarakhand.',
    duration: '3 Days / 2 Nights',
    cost: '₹7,500',
  },
  {
    id: 2,
    name: 'Mussoorie',
    image: 'https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1746526797mussorroe.jpg',
    description: 'Known as the Queen of Hills, ideal for a peaceful retreat.',
    duration: '2 Days / 1 Night',
    cost: '₹5,800',
  },
  {
    id: 3,
    name: 'Rishikesh',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/laxman%20jhula-rishikesh-uttrakhand-hero?qlt=82&ts=1726646312953',
    description: 'Spiritual town famous for yoga, rafting, and the Ganges.',
    duration: '3 Days / 2 Nights',
    cost: '₹6,500',
  },
  {
    id: 4,
    name: 'Haridwar',
    image: 'https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-cms-storage.s3.ap-south-1.amazonaws.com%2FPlaces_To_Visit_In_Haridwar_b1b1155679.webp&w=3840&q=50&dpl=dpl_36Jd5amdbKTUNpSZEhWbwK8hfTaC',
    description: 'Holy city known for Ganga Aarti and temples.',
    duration: '2 Days / 1 Night',
    cost: '₹4,900',
  },
  {
    id: 5,
    name: 'Dehradun',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdlEZyrX9JlZgwnwtS1Y8YcWcuXSsaTs-BA&s',
    description: 'Capital city surrounded by lush forests and caves.',
    duration: '3 Days / 2 Nights',
    cost: '₹6,800',
  },
  {
    id: 6,
    name: 'Tungnath & Chandrashila',
    image: 'https://mohitbangari.com/wp-content/uploads/2025/04/bvofHrrFfw2clKK5alGuJZURn5qXnAKIN82290Aq.jpg',
    description: 'Famous trek route with panoramic Himalayan views.',
    duration: '3 Days / 2 Nights',
    cost: '₹6,800',
  },
];

const PopularLocations = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="w-full px-4 relative py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-left text-gray-800">Popular Locations</h1>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-72 -right-10 flex items-center gap-4 mx-auto z-20">
        {/* <button
          ref={prevRef}
          aria-label="Previous"
          className="bg-prime hover:bg-sec text-white p-2 rounded-full shadow-lg transition"
        >
          <FiArrowLeft size={24} />
        </button> */}
        <button
          ref={nextRef}
          aria-label="Next"
          className="bg-white cursor-pointer shadow-xl text-sec p-2 rounded-full "
        >
          <FiArrowRight size={32} />
        </button>
      </div>

      {swiperReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={3}
          loop={true}
           speed={900} 
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {locations.map((location) => (
            <SwiperSlide key={location.id}>
              <LocationCard
                image={location.image}
                name={location.name}
                description={location.description}
                duration={location.duration}
                cost={location.cost}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PopularLocations;
