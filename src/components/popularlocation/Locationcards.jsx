import React from 'react';
import { FaInfoCircle, FaPaperPlane } from 'react-icons/fa';

const LocationCard = ({ image, name, description, duration, cost }) => {
    return (
        <div className="relative   rounded-3xl  overflow-hidden transition transform max-w-[30vw] h-[60vh] mx-auto">

            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-72 object-cover rounded-3xl"
                />

                {/* Days Tag */}
                {/* <span className="absolute top-0 font-poppins -left-2 bg-prime text-white text-sm font-semibold px-5 py-2 shadow-md">
                    {duration}
                </span> */}
            </div>

            <div className=" mt-5 text-start">
                <h2 className="text-2xl lg:text-sm font-bold font-poppins text-gray-900">
                    {name}
                </h2>

                <p className="text-gray-700 text-base lg:text-sm font-releway mt-1 leading-relaxed">
                    {description}
                </p>

                <div className=" mt-1 btext-base lg:text-lg text-gray-800">
                    <p>
                        <span className="text-sec font-bold">{cost}</span>
                    </p>
                </div>

                {/* <div className=" flex flex-col absolute z-10 bottom-7 sm:flex-row sm:justify-start gap-4">
                    <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-sec hover:bg-sec/80 text-white text-base font-semibold rounded-full transition">
                        <FaInfoCircle className="text-md" />
                        View Details
                    </button>
                    <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-prime hover:bg-prime/80 text-white text-base font-semibold rounded-full transition">
                        <FaPaperPlane className="text-md" />
                        Send Query
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default LocationCard;
