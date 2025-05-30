// src/components/ui/DogLoader.jsx
import React from 'react';

const Loader = () => {
    return (
        <div className="h-screen w-full flex flex-col fixed z-9999 justify-center items-center bg-[#E6E6E6]">
            <img
                src="/loader-image-yoga.png"
                alt="Loading..."
                className="w-[vw] h-auto"
            />
        </div>
    );
};

export default Loader;
