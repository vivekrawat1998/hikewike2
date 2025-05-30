import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgram } from '../redux/slice/Program.Slice';
import Profile from '../ui/Profile';
import Featurecard from '../components/Featuredcoourses/Featurecard';

const AllFeaturePage = () => {
    const dispatch = useDispatch();
    const { program, loading, error } = useSelector((state) => state.program);

    useEffect(() => {
        dispatch(fetchProgram());
    }, [dispatch]);

    return (
        <div className="grid w-full place-items-center">
            <div className="md:w-[90%] bg-[#F5F0E3] py-10">
                <Profile text={"All Courses"} />

                <div className="w-full min-h-screen px-4 md:px-20 py-10 bg-[#f9f9f9]">
                    <h1 className='md:text-2xl  text-xl '>All Courses</h1>

                    {loading ? (
                        <p className="text-centertext-gray font-ptserif text-lg">Loading programs...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                            {program.map((prog, index) => (
                                <Featurecard
                                    key={index}
                                    title={prog.heading}
                                    image={prog?.images?.[0]?.url || "/images/default.jpg"}
                                    description={prog.content}
                                    slug={prog.slug}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default AllFeaturePage;
