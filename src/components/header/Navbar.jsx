// Assuming your Navbar.jsx or app layout file

import React from "react";
import Logo from "./Logo";
import SearchBar from "../header/Searchbar";
import NavLinks from "../header/Navlinks";
import RightActions from "../header/Rightaction";
import MobileBottomTabs from "../header/Mobiletab";

const Navbar = () => (
  <>
    <header className="w-full z-50 bg-white fixed top-0 left-0 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1">
        <div className="flex-1 mt-2">
          <Logo />
        </div>
        <div className="flex-[2] hidden md:flex flex-col items-center">
          <SearchBar />
        </div>
        <div className="flex-1 flex justify-end">
          <RightActions />
        </div>
      </nav>
      <div className="w-full md:grid hidden place-items-center">
        <NavLinks />
      </div>
    </header>

    {/* <MobileBottomTabs /> */}
  </>
);

export default Navbar;
