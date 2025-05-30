import React from "react";
import { YogaBorder, Yogadesc, YogaHeading } from "../ui/Styledcomponents";
import { Link } from "react-router-dom";

const images = [
    "/man-face-down.jpg",
    "/gallery3.jpg",
    "/full-shot-woman-doing-yoga.jpg",
    "/person-practicing-yoga-meditation-nature-sunset-sunrise.jpg",
];

const gridLayouts = [
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
];


function Gallery() {
    return (
        <div className="w-full bg-[#F2E9D2] py-16  sm:px-6 ">
            <YogaHeading>Gallery</YogaHeading>
            <YogaBorder />
            <div className="grid place-items-center w-full mx-auto">
                <Yogadesc text="text-center">
                    We at Maharidhivedvyasa foundation provide various services to the nature of the clients.
                    Wish how you would like to spend the time here — we can talk and come to a conclusion.
                </Yogadesc>
            </div>

            {/* Responsive container */}
            <div className="bg-[#f7edd5] flex flex-col lg:flex-row items-center justify-center py-10 ">
                {/* Left Card */}
                <div className="bg-[#e5cd97] w-full lg:max-w-xs p-6 flex h-[60vh] space-y-5 flex-col justify-center items-start  text-center lg:text-left">
                    <h2 className="text-3xl font-serif font-bold tracking-wide text-[#595132]">
                        <span className="block mb-2">Memories</span>
                        <span className="block w-12 h-0.5 bg-[#9e9362] mx-auto lg:mx-0 mb-2"></span>
                    </h2>
                    <p className="text-[#595132] text-base font-medium">
                        Transform your body, mind, and spirit.
                        <br /> Join us to unlock the secrets of peace and vitality.
                    </p>
                    <Link to="/contactus" className="bg-[#ffde7c] text-[#5c501a] text-base font-bold rounded-full px-6 py-2.5 shadow-md transition hover:bg-[#ffe7a9] focus:outline-none focus:ring-2 focus:ring-[#efd071]">
                        Join Community
                    </Link>
                </div>

                {/* Right Image Grid */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 grid-rows-2  h-auto lg:h-[60vh]">
                    {images.map((src, i) => {
                        const gridClass = gridLayouts[i] || "col-span-1 row-span-1";
                        return (
                            <div
                                key={i}
                                className={`overflow-hidden shadow-lg bg-[#f7efd5] ${gridClass}`}
                                style={{ minHeight: "120px" }}
                            >
                                <img
                                    src={src}
                                    alt={`Yoga scenery ${i + 1}`}
                                    className="object-cover w-full h-full"
                                    draggable="false"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
