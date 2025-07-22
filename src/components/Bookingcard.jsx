import React, { useState } from "react";

const BookNowCard = ({
  basePrice = 28999,
  originalPrice = 30999,
  discount = 2000,
  tripDates = ["26 Jul"],
  months = ["Jul", "Aug", "Sep"],
}) => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedDate, setSelectedDate] = useState(tripDates[0]);
  const [travellers, setTravellers] = useState(1);

  return (
    <div className="p-6 rounded-2xl border shadow-lg font-parkinsans bg-white w-full max-w-xl mx-auto">
      <div className="text-gray-900 font-medium text-sm mb-2">
        Trip Starts From
      </div>
      <div className="flex items-end space-x-0 mb-3">
        <span className="text-[#F36F25] text-3xl font-medium">
          ₹ {basePrice.toLocaleString()}
        </span>
        <span className="line-through text-gray-400 text-md">
          ₹ {originalPrice.toLocaleString()}
        </span>
        <span className="text-[#F36F25] text-sm font-semibold">
          ₹ {discount.toLocaleString()} Off
        </span>
      </div>
      <div className="text-xs text-right text-gray-700 -mt-7 mb-4">
        Per Person
      </div>

      {/* Trip Dates Dropdown */}
      <div className="mb-4">
        <div className="font-semibold text-gray-800 flex  items-center mb-2">
          <div className="flex items-center w-full justify-between">
            <span role="img" aria-label="calendar" className="">
              📅 Trip Dates
            </span>

            <select
              className="border rounded-full p-2 text-gray-700 bg-white w-1/2 focus:outline-none transition"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((month, idx) => (
                <option value={month} key={idx}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2 text-gray-700 text-sm">
          {selectedDate}{" "}
          <span className="text-xs text-gray-500">
            Starting ₹{basePrice}/Person
          </span>
        </div>
      </div>

      {/* Travellers */}
      <div className="mb-5">
        <div className="font-semibold text-gray-800 w-full flex  justify-between items-center mb-2">
          <span role="img" aria-label="travellers" className="mr-2 ">
            👥 No. of Travellers
          </span>

          <div className="flex items-center space-x-3">
            <button
              className=" px-2 py-1 rounded text-lg text-gray-500"
              disabled={travellers <= 1}
              onClick={() => setTravellers(travellers - 1)}
            >
              −
            </button>
            <span className="text-lg">{travellers}</span>
            <button
              className=" px-2 py-1 rounded text-lg text-gray-500"
              onClick={() => setTravellers(travellers + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <button className="w-full bg-[#F36F25] text-white py-2 rounded-full font-semibold text-lg transition hover:bg-[# mb-3">
        Send Enquiry
      </button>

      <div className="flex  gap-2 mt-2">
        <span className="text-gray-700 text-sm">Any Doubt?</span>
        <button className="flex items-center px-3 py-1 bg-green-50 text-[#F36F25] border-[#F36F25] border rounded-lg font-medium hover:bg-green-100">
          <svg width="18" height="18" fill="currentColor" className="mr-1">
            <circle cx="9" cy="9" r="8.5" />
            <path d="M5 7.5c.5-.6 2.1-1.2 4.6 1.3C12.9 11 11.5 13 10 13" />
          </svg>
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default BookNowCard;
