import React, { useState } from "react";

const ChevronDown = ({ open }) => (
    <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

const ItineraryBreakdown = ({ itinerary }) => {
    const [openDayIndex, setOpenDayIndex] = useState(null);

    const toggleDay = (index) => {
        setOpenDayIndex(openDayIndex === index ? null : index);
    };

    return (
        <div className="my-10   font-parkinsans">
            <div className="flex items-center justify-between mb-4">


                <h2 className="md:text-[30px] text-[20px] font-semibold">Itinerary Breakdown</h2>
                <button
                    type="button"
                    className="border border-[#09090B] px-5 py-2 text-sm  hidden rounded-full md:flex items-center gap-2 font-regular  hover:bg-gray-100"
                // You can add your download functionality here
                >
                    <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx={10} cy={10} r={9} />
                        <path d="M7 10l2 2 4-4" />
                    </svg>
                    Download Itinerary
                </button>
            </div>

            <div className="bg-white shadow rounded-xl font-parkinsans divide-y divide-gray-200">
                {itinerary.map((day, i) => {
                    const isOpen = openDayIndex === i;
                    return (
                        <div key={day.day || i} className="px-6  py-8">
                            <div
                                className="flex  items-center gap-6 cursor-pointer select-none"
                                onClick={() => toggleDay(i)}
                                aria-expanded={isOpen}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') toggleDay(i);
                                }}
                            >
                                <div className="flex flex-col gap-3">
                                    <span className="bg-gray-100 border border-gray-200 rounded-full md:px-4 md:py-2 text-sm font-semibold text-gray-700 w-[70px] md:w-[100px] text-center">
                                        Day {day.day}
                                    </span>
                                    <span className="text-lg font-semibold text-gray-900">{day.title}</span>
                                </div>
                                <span className="ml-auto text-gray-400">
                                    <ChevronDown open={isOpen} />
                                </span>
                            </div>

                            {/* Show activities if open */}
                            {isOpen && day.activities && (
                                <ul className="mt-4 leading-6 md:ml-[20px] list-disc md:ml-0 ml-3 md:list-inside font-medium text-[#09090B
] text-sm space-y-1">
                                    {day.activities.map((activity, idx) => (
                                        <li key={idx}>{activity}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="w-full grid place-items-center mt-10">
                <button
                    type="button"
                    className="border border-[#09090B] px-4 py-2 text-sm md:hidden block  rounded-full flex items-center gap-2 font-regular  hover:bg-gray-100"
                // You can add your download functionality here
                >
                    <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx={10} cy={10} r={9} />
                        <path d="M7 10l2 2 4-4" />
                    </svg>
                    Download Itinerary
                </button>
            </div>

        </div>
    );
};

export default ItineraryBreakdown;
