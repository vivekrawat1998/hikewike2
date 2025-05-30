import { YogaBorder, Yogadesc, YogaHeading } from '../../ui/Styledcomponents';
import Featurecard from './Featurecard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgram } from '../../redux/slice/Program.Slice';

const Feraturecourse = () => {
    const dispatch = useDispatch();
    const { program, loading, error } = useSelector((state) => state.program);

    useEffect(() => {
        dispatch(fetchProgram());
    }, [dispatch]);

    // Get only the first three programs
    const featuredPrograms = program.slice(0, 3);

    return (
        <div className='bg-[#F5F0E3] w-full px-4 md:px-10 py-32 text-center max-w-7xl mx-auto mt-10'>
            <YogaHeading>Featured Courses</YogaHeading>
            <YogaBorder />
            <div className='grid place-items-center mx-auto'>
                <Yogadesc text="text-center">
                    We at Maharidhivedvyasa foundation provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.
                </Yogadesc>
            </div>

            <div className='w-full mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {!loading && !error && featuredPrograms.length === 0 && (
                    <p>No featured courses available.</p>
                )}
                {!loading && !error && featuredPrograms.map((card) => (
                    <Featurecard
                        key={card.id}
                        title={card.heading}
                        image={card?.images?.[0]?.url || "/images/default.jpg"}
                        description={card.content}
                        slug={card.slug}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feraturecourse;
