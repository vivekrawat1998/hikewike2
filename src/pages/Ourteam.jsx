import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurteam } from '../redux/slice/Ourteam.slice';
import Teamcard from '../components/Team/Teamcard';
import Profile from '../ui/Profile';

const Ourteam = () => {
    const dispatch = useDispatch();
    const { ourteam, loading, error } = useSelector((state) => state.ourteam || {});

    useEffect(() => {
        dispatch(fetchOurteam());
    }, [dispatch]);
    return (
        <div className="grid w-full place-items-center">
            <div className="md:w-[90%] bg-[#F5F0E3] md:px-20 py-10">
                <Profile text={"Our Team"} />
                <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-8">
                    {loading ? (
                        <p className="col-span-full text-center text-lg">Loading team...</p>
                    ) : error ? (
                        <p className="col-span-full text-center text-red-600">Error: {error}</p>
                    ) : Array.isArray(ourteam) && ourteam.length > 0 ? (
                        ourteam.map((member, index) => (
                            <Teamcard
                                key={index}
                                image={member.images?.[0]?.url || ''}
                                name={member.name}
                                title={member.title}
                                desc={member.description}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-600">
                            No team members found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Ourteam