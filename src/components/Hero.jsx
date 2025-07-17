import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full grid place-items-center h-[90vh] text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Unseen Beauty Of Uttarakhand  Cinematic Drone Video - Uttarakhand Tourism - Uttarakhand Tourism (1080p, h264).mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground Content */}
      <div className="absolute z-20 flex flex-col items-center justify-center h-full w-full text-center px-4">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[4rem] font-releway font-semibold mb-4 drop-shadow-lg">
          Explore the Unseen
        </h1>
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl font-releway drop-shadow">
          Discover hidden trails, majestic peaks, and scenic beauty across Uttarakhand & beyond.
        </p>

        {/* Search Box */}
        <div className="flex items-center bg-white/90 text-gray-700 w-full max-w-2xl rounded-full px-6 py-4 shadow-xl backdrop-blur-md border border-white/20 mb-6">
          <Search className="text-gray-400 mr-3 w-6 h-6" />
          <input
            type="text"
            placeholder="Search by Location..."
            className="flex-1 outline-none bg-transparent text-base sm:text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
