import React from 'react';
import { useParams } from 'react-router-dom';
import Locations from '../components/utils/Locationss.json';

const LocationDetails = () => {
    const { id } = useParams();
    const location = Locations.trip_collection.trips.find(loc => loc.id === parseInt(id));

    if (!location) {
        return <p className="text-center text-red-600 text-xl mt-10">Location not found</p>;
    }

    const { name, images, itinerary, duration_days, estimated_cost, category } = location;

    return (
        <div className="max-w-7xl  pt-32 mx-auto px-4 py-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{name}</h1>

            {/* Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
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

            {/* Main Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section: Itinerary & Details */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Itinerary</h2>
                    <div className="space-y-4">
                        {itinerary.map((day, i) => (
                            <div key={i}>
                                <h3 className="font-semibold text-lg text-prime mb-1">Day {day.day}</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    {day.activities.map((activity, j) => (
                                        <li key={j}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Booking Card */}
                <div className="p-6 border border-gray-200 rounded-2xl shadow-lg bg-white">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                        {estimated_cost}
                    </div>
                    <p className="text-gray-600 mb-2">
                        {duration_days} Days · Category: <span className="font-medium">{category}</span>
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                        <button className="bg-prime hover:bg-prime/90 text-white font-semibold py-2.5 rounded-xl transition duration-200">
                            Book Now
                        </button>
                        <button className="border border-prime text-prime font-semibold py-2.5 rounded-xl hover:bg-prime/10 transition duration-200">
                            Send Inquiry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetails;
