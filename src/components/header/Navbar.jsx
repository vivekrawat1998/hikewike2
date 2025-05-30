import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItemsLeft = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/aboutus' },
  { name: 'Courses', path: '/programs' },
];
const navItemsRight = [
  { name: 'Our Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contactus' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const PHONE_NUMBER = '+91 9876543210';
  return (
    <header className="w-full absolute z-999999 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo on left for all screens */}
        <div className="flex items-center gap-2">
          <img src="/Group 427320963.svg" alt="Kriya Logo" className="h-20 w-24" />
        </div>

        {/* Phone number on right for desktop */}
        <div className="hidden md:flex items-center text-white font-semibold text-lg">
          <a href="tel:+919876543210" className="hover:text-yellow-300 transition-colors duration-200">{PHONE_NUMBER}</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden relative px-4 pb-4 text-white bg-black/80">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-center">
            {[...navItemsLeft, ...navItemsRight].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
                className={`${linkClasses(item.name)} block`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Phone number for mobile */}
          <div className="mt-4 text-center font-semibold flex justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-bold shadow-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 border-2 border-yellow-300 hover:border-yellow-500"
              style={{ letterSpacing: '1px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.386a2.25 2.25 0 00-1.687-2.183l-2.262-.565a2.25 2.25 0 00-2.591 1.01l-.7 1.167a11.963 11.963 0 01-5.233-5.233l1.167-.7a2.25 2.25 0 001.01-2.591l-.565-2.262A2.25 2.25 0 007.886 3.5H5.5A2.25 2.25 0 003.25 5.75v1z" />
              </svg>
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
