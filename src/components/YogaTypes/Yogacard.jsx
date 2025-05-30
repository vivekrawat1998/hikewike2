import React from 'react';
import { Yogadesc } from '../../ui/Styledcomponents';

const Yogacard = ({ image, description }) => {
    return (
        <>
            <style>
                {`
                @keyframes smooth-ping {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    80% {
                        transform: scale(1.4);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(2.2);
                        opacity: 0;
                    }
                }

                .animate-smooth-ping {
                    animation: smooth-ping 2.8s cubic-bezier(0.4, 0, 0.2, 0.4) infinite;
                }
                `}
            </style>

            <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md max-w-xs relative z-0">
                <div className="relative w-44 h-44 mb-4">
                    {/* Multiple animated layers behind image */}
                    <span
                        className="absolute inset-0 rounded-full bg-sec opacity-60 animate-smooth-ping z-0"
                        style={{ animationDelay: '0s' }}
                    />
                    <span
                        className="absolute inset-0 rounded-full bg-sec opacity-50 animate-smooth-ping z-0"
                        style={{ animationDelay: '0.6s' }}
                    />
                   
                    
                    <img
                        src={image}
                        alt="yoga"
                        className="w-44 h-44 rounded-full border-[6px] border-brown object-cover relative z-10"
                    />
                </div>

                <div className="flex flex-col items-start gap-1 mt-8 mb-4 w-full">
                    <span className="bg-brown md:w-62 w-full h-1"></span>
                    <span className="border-t-2 border-dotted border-brown md:w-62 w-full"></span>
                </div>

                <Yogadesc>{description}</Yogadesc>
            </div>
        </>
    );
};

export default Yogacard;
