import React, { Suspense, lazy } from "react";
import Loader from "../ui/Loader";

const Hero = lazy(() => import("../components/Hero"));
import Popularlocations from "../components/popularlocation/Popularlocations";
import TravelBanner from "../components/TravelBanner";
import HillStation from "../components/popularlocation/HillstationsOffbeat";
import Wildlife from "../components/popularlocation/Wildlife";
import OffbeatTrek from "../components/popularlocation/OffbeatTrek";
import CoorsparateTrips from "../components/popularlocation/CoorparateTrips";
import FirstBanner from "../components/banner/FirstBanner";
import ReasonsToTravel from "../components/WhyHikewike";
import Engages from "../components/footer/Engagenment";
import Instavideos from "../components/instagramshorts/Instavideos";
import TestimonialsSection from "../components/Testimonials/Testimonialssection";
import FAQSection from "../components/faq/FaqSection";

const Hompage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="">
        <Hero />
        <Popularlocations />
        <FirstBanner />
        {/* <HillStation /> */}
        {/* <TravelBanner /> */}
        {/* <Wildlife /> */}
        <OffbeatTrek />
        <CoorsparateTrips />
        <Instavideos />
        <ReasonsToTravel />
        <TestimonialsSection />    
        <FAQSection />   

        {/* <Engages /> */}
      </div>
    </Suspense>
  );
};

export default Hompage;
