import React from "react"

export const YogaHeading = ({ children, text = "text-center" }) => (
    <h1
        className={`${text} font-ptserif text-gray font-bold mb-6`}
        style={{
            fontSize: 'clamp(1rem, 5vw, 3rem)',
            letterSpacing: '1px',
        }}
    >
        {children}
    </h1>
);

export const Yogadesc = ({ children, text = "text-center" }) => (
    <h1
        className={`font-Rosario text-gray max-w-3xl font-thin text-sm font-bold mb-6 ${text}`}
        style={{
            fontSize: 'clamp(1rem, 5vw, 1rem)',
            letterSpacing: '1px',
        }}
    >
        {children}
    </h1>
);


export const YogaBorder = () => {
    return (
        <div className="flex items-center -mt-10 justify-center gap-2">
            <div className="flex flex-col items-end gap-1">
                <span className="bg-brown md:w-62 w-full h-1"></span>
                <span className="border-t-2 border-dotted border-brown md:w-62 w-full"></span>
            </div>

            <img className="w-14 h-14 object-contain mx-4" src="/borderimage.png" alt="divider" />

            <div className="flex flex-col items-start gap-1">
                <span className="bg-brown md:w-62 w-full w-full h-1"></span>
                <span className="border-t-2 border-dotted border-brown md:w-62 w-full"></span>
            </div>
        </div>
    );
};
