// components/Navbar/MobileBottomTabs.jsx
import React, { useState } from "react";
import { Home, Menu, MessageSquare } from "lucide-react"; // or your preferred icons
import { Link } from "react-router-dom";
import Navlinks from "../header/Navlinks";

import SearchBar from "../header/Searchbar";

const MobileBottomTabs = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden flex justify-around items-center h-16">
        {/* Home Tab */}
        <Link
          to="/"
          className="flex flex-col items-center text-gray-700 hover:text-emerald-600"
          aria-label="Home"
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>

        {/* Toggle Search/Nav Tab */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          aria-controls="mobile-menu"
          aria-expanded={showMenu}
          aria-label="Toggle Menu"
          className="flex flex-col items-center text-gray-700 hover:text-emerald-600 focus:outline-none"
        >
          <Menu size={24} />
          <span className="text-xs mt-1">Menu</span>
        </button>

        {/* WhatsApp Tab */}
        <a
          href="https://wa.me/918287636079"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 hover:text-emerald-600"
          aria-label="WhatsApp Us"
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>
      </nav>

      {/* Collapsible Menu - Search + NavLinks */}
      {showMenu && (
        <div
          id="mobile-menu"
          className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg px-2 py-3 z-40 overflow-auto max-h-[calc(100vh-4rem)]"
        >
          <SearchBar />
          <div className="mt-2">
            <Navlinks />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileBottomTabs;
