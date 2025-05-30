import React, { useEffect } from "react";
import Profile from "../ui/Profile";
import { useDispatch, useSelector } from "react-redux";
import { fetchgallery } from "../redux/slice/Gallery.slice";

const GalleryPage = () => {
    const dispatch = useDispatch();
    const { gallery = [], loading, error } = useSelector((state) => state.gallery || {});

    useEffect(() => {
        dispatch(fetchgallery());
    }, [dispatch]);
    
    return (
        <div className="grid w-full place-items-center">
            <div className="md:w-[90%] bg-[#F5F0E3] py-10">
                <Profile text={"Gallery"} />
                <div className="bg-[#f8f0df] min-h-screen p-6 md:p-12">
                    {loading && <p className="text-center text-gray-600">Loading images...</p>}
                    {error && <p className="text-center text-red-600">{error}</p>}

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {gallery.map((item, index) => {
                            const image = item.images?.[0];
                            if (!image) return null;

                            return (
                                <div
                                    key={item._id}
                                    className={`rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out ${index % 3 === 0
                                        ? "row-span-2"
                                        : index % 4 === 0
                                            ? "col-span-2"
                                            : ""
                                        }`}
                                >
                                    <img
                                        src={image.url}
                                        alt={item.heading || `gallery-${index}`}
                                        className="w-full h-full object-cover aspect-square"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
