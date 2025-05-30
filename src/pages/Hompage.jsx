import React, { Suspense, lazy } from 'react';
import Loader from '../ui/Loader';


const Hero = lazy(() => import('../components/Hero'));
const YogaType = lazy(() => import('../components/YogaTypes/YogaType'));
const Ypfaquotes = lazy(() => import('../components/Ypfaquotes'));
const Whyyoga = lazy(() => import('../components/whyyoga/Whyyoga'));
const Feraturecourse = lazy(() => import('../components/Featuredcoourses/Feraturecourse'));
const Gallery = lazy(() => import('../components/Gallery'));
const Testimonials = lazy(() => import('../components/testimonials/Testimonails'));
const Teams = lazy(() => import('../components/Team/Teams'));
const VideoSection = lazy(() => import('../components/Videosection'));
import Popularlocations from '../components/popularlocation/Popularlocations';
import TravelBanner from '../components/TravelBanner';

const Hompage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className=''>
        <Hero />
        <Popularlocations />
          <TravelBanner />
        
     
        {/* <YogaType />
        <Ypfaquotes />
        <Whyyoga />
        <div className='w-full mx-auto grid place-items-center bg-[#F5F0E3] py-10'>
          <Feraturecourse />
        </div>
        <VideoSection />
        <Gallery />
        <Teams />
        <Testimonials /> */}
      </div>
    </Suspense>
  );
};

export default Hompage;
