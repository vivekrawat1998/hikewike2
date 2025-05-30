import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VideoSection = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get("https://api.maharishivedvyas.org/api/v1/uploadvideo/all");
                const videoList = response.data.videos;

                setVideos(videoList);
                if (videoList.length > 0) setSelectedVideo(videoList[0].url);
            } catch (err) {
                console.error("Error fetching videos", err);
            }
        };

        fetchVideos();
    }, []);

    return (
        <section className="bg-[#f0e5c9] py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Main Video + Thumbnails */}
                <div>
                    <div className="relative">
                        {selectedVideo && (
                            <video
                                src={selectedVideo}
                                controls
                                className="w-full rounded-lg"
                            ></video>
                        )}
                        <h2 className="absolute top-0 left-0 w-full text-white bg-black bg-opacity-50 text-center py-2 text-lg font-semibold">
                            Make Your Way To Complete Health
                        </h2>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-4 mt-6 flex-wrap">
                        {Array.isArray(videos) &&
                            videos.slice(0, 4).map((video) => (
                                <div
                                    key={video.public_id}
                                    className="cursor-pointer w-24 md:w-32 h-auto relative"
                                    onClick={() => setSelectedVideo(video.url)}
                                >
                                    <video
                                        src={video.url}
                                        className="w-full h-full object-cover rounded"
                                        muted
                                        preload="metadata"
                                    ></video>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Right Side - Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Make your way to complete health
                    </h2>
                    <p className="text-lg mb-4">
                        We at <span className="font-semibold">Maharidhivedvyasa foundation</span> provide various
                        services to the nature of the clients. Wish how you would like to
                        spend the time here we can talk and come to a conclusion.
                    </p>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra
                        nulla ut metus varius laoreet. Aenean the secrece is to fill most of
                        the part with amazing fillers imperdiet. We at Maharidhivedvyasa foundation provide
                        various services to the nature of the clients.
                    </p>
                    <div className="mt-10">
                        <Link to="/video" className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded shadow hover:bg-yellow-300 transition duration-300">
                            VIEW ALL VIDEOS
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default VideoSection;
