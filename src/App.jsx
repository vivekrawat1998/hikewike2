import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Hompage from "./pages/Hompage";
import Layout from "./ui/Layout";
import ScrollToTop from "./ui/Scrollontop";

import Loader from "./ui/Loader";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hompage />} />
            <Route path="/location/:id" element={<LocationDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
