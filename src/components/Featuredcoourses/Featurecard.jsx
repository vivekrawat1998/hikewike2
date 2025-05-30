import React from 'react';
import { useNavigate } from 'react-router-dom';

const getShortContent = (htmlContent, wordLimit = 30) => {
    if (typeof window === 'undefined') return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    const words = text.trim().split(/\s+/);
    const shortText = words.slice(0, wordLimit).join(' ');
    return words.length > wordLimit ? shortText + '...' : shortText;
};

const Featurecard = ({ title, description, slug, image }) => {
    const shortDescription = getShortContent(description, 30);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/programs/${slug}`);
    };

    return (
        <div
        onClick={handleClick}
            className='relative group w-full max-w-sm rounded-lg bg-white cursor-pointer shadow-md transition-transform hover:scale-105 overflow-hidden'
        >
            {/* Image */}
            <img
                src={image}
                alt={title}
                className='w-full h-48 object-cover rounded-t-lg'
            />

            {/* Green Overlay with button */}
            <div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-300 to-[#FFDA6B] opacity-0 group-hover:opacity-60 transition-all duration-500 ease-in-out z-20 rounded-lg
                flex items-center justify-center"
            >
                <button
                    onClick={handleClick}
                    className="bg-black bg-opacity-70 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-black transition"
                >
                    View Course
                </button>
            </div>
            {/* Border Overlay */}
            <div className='absolute top-0 left-10 w-full h-full border-r-2 border-brown opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-30 rounded-lg pointer-events-none' />

            {/* Content */}
            <div className='p-5 flex flex-col items-center justify-between gap-3 z-40 relative h-[220px]'>
                <h2 className='text-2xl font-bold text-gray text-center'>{title}</h2>
                <p className='text-gray text-center text-sm overflow-hidden'>{shortDescription}</p>
            </div>
        </div>
    );
};

export default Featurecard;
