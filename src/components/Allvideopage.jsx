import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Profile from "../ui/Profile";
import Loader from "../ui/Loader"; 

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("https://api.maharishivedvyas.org/api/v1/uploadvideo/all");
        setVideos(response.data.videos);
      } catch (err) {
        console.error("Error fetching videos", err);
      } finally {
        setLoading(false); 
      }
    };
    fetchVideos();
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="grid w-full place-items-center">
      <div className="w-[90%] bg-white py-10">
        <Profile text={"All Videos"} />
        <section className="py-16 px-6 md:px-20 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {videos.length === 0 ? (
                <p>No videos found.</p>
              ) : (
                videos.map((video) => (
                  <div key={video.public_id} className="rounded overflow-hidden shadow-lg">
                    <video
                      src={video.url}
                      controls
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                ))
              )}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded shadow hover:bg-yellow-300 transition duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoPage;
