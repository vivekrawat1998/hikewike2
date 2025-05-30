import React from 'react';

const Teamcard = ({ image, name, title, desc }) => {
    return (
        <div className="bg-white grid grid-cols-2 group shadow-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105 w-full mx-auto">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover mx-auto mb-6"
            />
            <div className="text-start p-5 group-hover:bg-[#FFDA6B] w-full">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-md text-gray-600 mb-2">{title}</p>
                {desc && <p className="text-sm text-gray-500">{desc}</p>}
            </div>
        </div>
    );
};

export default Teamcard;
