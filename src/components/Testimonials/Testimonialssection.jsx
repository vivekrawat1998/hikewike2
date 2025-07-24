import React from "react";
import { FaStar } from "react-icons/fa";

// Example data: text testimonials (Uttarakhand only)
const textTestimonials = [
  {
    name: "Aarav Singh",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/230626113513-06-india-epic-hikes-kudremukh.jpg?c=original", // sample, replace with actual image
    text:
      "My Kedarnath trek with Hike Wike was seamless! The breathtaking Himalayan views and local culture made this an unforgettable Uttarakhand adventure.",
    journey: "Kedarnath Trek, Uttarakhand",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyawB5OfKkmKVlDokOY6BsOpPTNxFww7Mqg&s",
    text:
      "Exploring Valley of Flowers through Hike Wike was pure magic. The guides ensured safety and fun at every turn. Highly recommended for Uttarakhand explorers!",
    journey: "Valley of Flowers, Uttarakhand",
    rating: 5,
  },
];

// Example data: video testimonials (Uttarakhand only)
const videoTestimonials = [
  {
    name: "Rahul Mehra",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2G7AzywkY3Fn0Dbl1g8xN0AcXKNhSPr2nbg&s",
    journey: "Har Ki Dun Trek, Uttarakhand",
    video:
      "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753341664/y2mate.gg_-_One_of_the_best_Tendom_bungee_jump_Contact_us_for_booking_HD_video_crjb7u.mp4", // sample, add actual video
  },
  {
    name: "Meera Joshi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwo7lYPOngfESkYhO6M3o8uc_1wz2A6EPDOQ&s",
    journey: "Nainital Adventure, Uttarakhand",
    video:
      "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340811/y2mate.gg_-_Escape_to_Rooftop_Cottages_just_40_minutes_from_Nainital_w_HD_video_z8fnir.mp4", // sample, add actual video
  },
];

// Single Text Testimonial Card
const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col bg-white shadow-xl rounded-2xl px-6 py-8 m-3 w-full  relative">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-prime shadow"
      />
      <div>
        <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
        <div className="text-xs text-[#5A5A5A]">{testimonial.journey}</div>
        <div className="flex mt-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-base" />
          ))}
        </div>
      </div>
    </div>
    <div className="text-gray-700 italic mb-2 line-clamp-4">
      &ldquo;{testimonial.text}&rdquo;
    </div>
  </div>
);

// Single Video Testimonial Card
const VideoTestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col bg-white shadow-xl rounded-2xl px-6 py-8 m-3 w-full  relative">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-prime shadow"
      />
      <div>
        <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
        <div className="text-xs text-[#5A5A5A]">{testimonial.journey}</div>
        {/* <div className="mt-2 text-xs font-semibold text-yellow-600">Video Testimonial</div> */}
      </div>
    </div>
    <video
      src={testimonial.video}
      controls
      className="w-full rounded-xl shadow mt-2 object-cover max-h-60"
      preload="metadata"
      poster="/video-poster.jpg"
      autoPlay
    />
  </div>
);

// Main Testimonials Section Component (Uttarakhand only)
const TestimonialsSection = () => (
  <section className="bg-white py-14 px-6">
    <h2 className="text-3xl md:text-3xl font-parkinsans font-semibold text-start text-gray-900 mb-8">
      Hike Wike: Unforgettable Uttarakhand Experiences
    </h2>
    <div className="max-w-8xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-3 justify-items-center">
      {textTestimonials.map((t, idx) => (
        <TestimonialCard testimonial={t} key={"text-" + idx} />
      ))}
      {videoTestimonials.map((t, idx) => (
        <VideoTestimonialCard testimonial={t} key={"video-" + idx} />
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
