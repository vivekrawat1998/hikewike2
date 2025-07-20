// /components/Navbar/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" aria-label="Home" className="flex items-center">
    <img
      src="/Group 427320963.svg"
      alt="capture a trip"
      className="h-16 w-auto object-contain"
      draggable={false}
      fetchpriority="high"
      loading="eager"
    />
  </Link>
);

export default Logo;
