import React, { useEffect } from 'react';
import Teamcard from '../../components/Team/Teamcard';
import { YogaBorder, Yogadesc, YogaHeading } from '../../ui/Styledcomponents';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurteam } from '../../redux/slice/Ourteam.slice';

const Teams = () => {
  const dispatch = useDispatch();
  const { ourteam, loading, error } = useSelector((state) => state.ourteam) || {};
  console.log(ourteam)

  useEffect(() => {
    dispatch(fetchOurteam());
  }, [dispatch]);

  return (
    <div className="w-full px-5 py-32 bg-[#F2E9D2]">
      <div className="max-w-7xl mx-auto text-center">
        <YogaHeading>MEET OUR TEAM</YogaHeading>
        <YogaBorder />
        <div className="w-full grid place-items-center mx-auto">
          <Yogadesc text="text-center">
            Our team of dedicated professionals is here to guide you on your journey to wellness and self-discovery.
          </Yogadesc>
        </div>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-8">
          {loading ? (
            <p className="col-span-full text-center text-lg">Loading team...</p>
          ) : error ? (
            <p className="col-span-full text-center text-red-600">Error: {error}</p>
          ) : Array.isArray(ourteam) && ourteam.length > 0 ? (
            ourteam.map((member, index) => (
              <Teamcard
                key={member._id || index}
                image={member.images && member.images.length > 0 ? member.images[0].url : ''}
                name={member.name}
                title={member.position}
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
  );
};

export default Teams;
