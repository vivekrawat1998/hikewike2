import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PHONE_NUMBER = '+91 9557275467';

const Navbar = () => (
  <header className="w-full z-50 bg-transparent absolute left-0 top-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" >
          <img
            src="/Group 427320963.svg"
            alt="Kriya Logo"
            className="h-16 w-auto md:h-20 transition-all duration-300"
            style={{ filter: 'drop-shadow(0 1px 4px #f7e1af40)' }}
          />
        </Link>
      </div>

      <div className="flex items-center gap-3 mt-3 md:mt-0">
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-black font-semibold shadow-lg text-lg md:text-xl hover:bg-white/95 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-150"
          style={{ letterSpacing: '1px' }}
        >
          <Phone className="w-5 h-5 text-yellow-600" />
          <span className="font-bold">{PHONE_NUMBER}</span>
        </a>
      </div>
    </div>
  </header>
);

export default Navbar;
