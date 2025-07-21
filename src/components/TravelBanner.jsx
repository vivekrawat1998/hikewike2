import React from "react";

const TravelBanner = () => {
  const imageUrl = "/c8763fbfa7a43daa6abb.avif";

  return (
    <section className="max-w-7xl mx-auto rounded-xl mb-10 overflow-hidden">
      {/* Large screen: background image with overlay and text */}
      <div
        className="hidden md:grid relative h-[60vh] bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
        {/* Vertically and horizontally align text to left-center */}
        <div className="relative z-10 max-w-lg text-white px-10 flex flex-col justify-center h-full">
          <h1 className="text-5xl font-semibold mb-4 text-sec">
            Explore the World with Us
          </h1>
          <p className="text-md text-sec/70 mb-6">
            Whether you want to explore offline or create your own route, choose
            the membership that helps you make the most of every minute
            outdoors.
          </p>
          <button className="bg-prime px-6 py-3 rounded-full text-white w-max">
            Explore Now
          </button>
        </div>
      </div>

      {/* Small screen: image on top and text below */}
      <div className="md:hidden">
        <img
          src={imageUrl}
          alt="Travel"
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="p-6 bg-[#E6EAE6] text-white rounded-b-xl">
          <h1 className="text-3xl font-bold mb-2">Explore the World with Us</h1>
          <p className="text-lg">Your adventure begins here.</p>
        </div>
      </div>
    </section>
  );
};

export default TravelBanner;
