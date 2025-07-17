// src/components/ui/DogLoader.jsx
import React from 'react';

const Loader = () => {
    return (
        <div className="h-screen w-full flex flex-col fixed z-9999 justify-center items-center bg-[#E6E6E6]">
            <img
                src="/Group 427320963.svg"
                alt="Loading..."
                className="w-[30vw] h-auto"
            />
        </div>
    );
};

export default Loader;
