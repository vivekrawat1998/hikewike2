import React, { useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const VIDEO_FILES = [
    "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340811/y2mate.gg_-_Escape_to_Rooftop_Cottages_just_40_minutes_from_Nainital_w_HD_video_z8fnir.mp4",
    "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340827/y2mate.gg_-_The_place_%EF%B8%8F_._._.._trending_newreel_explo_HD_video_iazfe4.mp4",
    "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340820/y2mate.gg_-_The_end_goal_is_to_be_located_at_places_like_these_and_not_w_HD_video_axfbwz.mp4",
    "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753340806/dl_wac1eb.mp4",
    "https://res.cloudinary.com/dtlbe7orb/video/upload/v1753341664/y2mate.gg_-_One_of_the_best_Tendom_bungee_jump_Contact_us_for_booking_HD_video_crjb7u.mp4"
];

const VideoCard = ({ src }) => {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const handleToggleSound = () => {
        setMuted((prevMute) => {
            if (videoRef.current) {
                videoRef.current.muted = !prevMute;
            }
            return !prevMute;
        });
    };

    return (
        <div className="min-w-[220px] w-[220px] sm:w-[250px] md:w-[300px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-black flex-shrink-0 relative mx-2 flex items-center justify-center">
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={muted}
                controls={false}
                playsInline
                preload="metadata"
                poster="/fallback.jpg"
            />
            {/* Hikewike logo overlay (top-right) */}
            <div className="absolute top-3 right-3 flex items-center justify-center">
                <img
                    src="/Group 427320963.svg" // Your logo path
                    alt="Hikewike Logo"
                    className="w-10 h-10 rounded-full drop-shadow"
                    style={{ objectFit: "contain" }}
                />
            </div>
            {/* Mute/Unmute Button */}
            <button
                onClick={handleToggleSound}
                className="absolute bottom-3 right-3 cursor-pointer px-2 py-2 rounded-full bg-black/70 text-white text-xs flex items-center shadow "
                tabIndex={0}
                defaultValue="false"
                aria-label={muted ? "Unmute video" : "Mute video"}
            >
                {muted ? (
                   <FaVolumeMute/>
                ) : (
                    // Sound on icon
                 <FaVolumeUp/>
                )}
                {/* <span className="ml-1">{muted ? "Sound ON" : "Mute"}</span> */}
            </button>
        </div>
    );
};

const Instavideos = ({ files = VIDEO_FILES }) => (
    <section
        className="py-10  max-w-[1580px] mx-auto  bg-white"
    >
        <h2 className="text-2xl font-bold font-parinksans text-center mb-6">Vibe with us</h2>
        <div>
            <div
                className="flex overflow-x-auto no-scrollbar space-x-4 "
                style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
            >
                {files.map((url, idx) => (
                    <VideoCard src={url} key={idx} />
                ))}
            </div>
        </div>
    </section>
);

export default Instavideos;
