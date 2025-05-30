import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Hompage from "./pages/Hompage";
import Layout from "./ui/Layout";
import ScrollToTop from "./ui/Scrollontop";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPAge";
import Ourteam from "./pages/Ourteam";
import FeatureDetails from "./components/Featuredcoourses/FeatureDetails";
import AllFeaturePage from "./pages/Allfeaturepage";

// Lazy load VideoPage
const VideoPage = lazy(() => import("./components/Allvideopage"));

// Loader Component
import Loader from "./ui/Loader";

function App() {
  return (
    <>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hompage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<Ourteam />} />
            <Route path="/programs/:slug" element={<FeatureDetails />} />
            <Route path="/programs" element={<AllFeaturePage />} />
            <Route
              path="/video"
              element={
                <Suspense fallback={<Loader />}>
                  <VideoPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
