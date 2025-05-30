import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgramDetails } from '../../redux/slice/Program.Slice';
import { useParams } from 'react-router-dom';
import Profile from '../../ui/Profile';

const FeatureDetails = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();

    const { programDetailsCache, loading, error } = useSelector((state) => state.program);
    const program = programDetailsCache[slug];

    useEffect(() => {
        if (!program) {
            dispatch(fetchProgramDetails(slug));
        }
    }, [dispatch, slug, program]);

    if (loading) return <p className="text-center mt-10 text-xl text-gray-500">Loading program details...</p>;
    if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
    if (!program) return <p className="text-center mt-10 text-gray-600">No program found.</p>;

    return (<div className="grid w-full place-items-center">
        <div className="w-[90%] bg-[#F5F0E3] py-10">
            <Profile text={"Progrm details"} />
            <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 relative bg-gradient-to-b from-white to-[#F9FAFB] shadow-xl rounded-xl">



                <style>{`
                @keyframes heartbeat {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.7;
                    }
                }
                .heartbeat {
                    animation: heartbeat 2.3s ease-in-out infinite;
                }
            `}</style>


                <div className="mb-10 text-center">
                    <h1 className="text-[#00715D] text-4xl font-bold">{program.heading}</h1>
                    <p className="mt-2 text-lg text-gray-600">Learn more about this impactful program</p>
                </div>
                {program.images && program.images.length > 0 && (
                    <div className="w-full mb-10">
                        <img
                            src={program.images[0].url}
                            alt={program.heading}
                            className="w-full h-[80vh] object-top rounded-lg shadow-md"
                        />
                    </div>
                )}

                <div
                    className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: program.content }}
                />
            </section>
        </div>
    </div>

    );
};

export default FeatureDetails;
