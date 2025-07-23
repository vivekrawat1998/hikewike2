import React, { useState } from "react";

const BookNowCard = ({
  estimatedcost = 28999,
  originalPrice = 10000,
  discount = 2000,
  tripDates = ["26 Jul"],
  months = ["Jul", "Aug", "Sep"],
}) => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedDate, setSelectedDate] = useState(tripDates[0]);
  const [travellers, setTravellers] = useState(1);

  return (
    <div className="p-6 rounded-2xl h-[45vh]   border border-[#09090B]/30   shadow-xl font-parkinsans bg-white w-full max-w-xl mx-auto">
      <div className="text-gray-900 font-medium text-sm mb-2">
        Trip Starts From
      </div>
      <div className="flex items-end space-x-0 mb-3">
        <span className="text-[#F36F25] text-3xl font-medium">
          {estimatedcost.toLocaleString()}
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
        <div className="font-semibold text-[#09090B] flex  items-center mb-2">
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
            Starting {estimatedcost}/Person
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

      <div className="flex items-center  gap-2 mt-2">
        <span className="text-[#09090B] text-[14px]  font-bold text-sm">Any Doubt?</span>
        <button className="flex items-center px-3 py-2 bg-green-100  gap-3 rounded-full cursor-pointer font-medium hover:bg-green-50">

          <img className="w-5 h-5" src="/whatsapp-color-svgrepo-com.svg" alt="" />
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default BookNowCard;
