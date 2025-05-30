import React from 'react';
import { Yogadesc, YogaHeading } from '../../ui/Styledcomponents';
import CountUp from 'react-countup';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUsers className="text-3xl text-brown" />,
    number: 1430,
    label: 'Total Users',
    description: 'So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.'
  },
  {
    icon: <FaCalendarAlt className="text-3xl text-brown" />,
    number: 10,
    suffix: '+',
    label: 'Years of Experience',
    description: 'So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs.'
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-brown" />,
    number: 12,
    label: 'Branches',
    description: 'So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.'
  },
  {
    icon: <FaUserFriends className="text-3xl text-brown" />,
    number: 300,
    suffix: '+',
    label: 'In-house Staffs',
    description: 'So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.'
  }
];

const Aboutussection = () => {
  return (
    <div className="max-w-7xl grid md:grid-cols-2 gap-10 px-5">
      {/* Left Content */}
      <div className="max-w-xl">
        <div className="flex flex-col -mt-5 items-start gap-1">
          <span className="bg-brown md:w-64 w-32 h-1"></span>
          <span className="border-t-2 border-dotted border-brown md:w-64 w-full"></span>
        </div>

        <img
          src="/about-yoga-600x573.png"
          alt="About Yoga"
          className="w-full object-cover mt-10"
        />
        <Yogadesc>
          We at Maharidhivedvyasa foundation provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk & come to a conclusion.
        </Yogadesc>
      </div>

      {/* Right Content */}
      <div className="flex flex-col font-ptserif justify-center gap-8">
        <h2 className="text-3xl font-bold text-[#5c501a] mb-4">Our Status in Numbers</h2>
        {stats.map(({ icon, number, label, description, suffix }, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="mt-1">{icon}</div>
            <div>
              <div className="text-2xl font-bold text-[#333]">
                <CountUp end={number} duration={2} suffix={suffix || ''} />
              </div>
              <h3 className="text-lg font-semibold text-[#5c501a]">{label}</h3>
              <p className="text-sm text-gray-600 mt-1 max-w-md">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutussection;
