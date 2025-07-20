// /components/Navbar/NavLinks.jsx
import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../header/Navlinksdata";

const NavLinks = () => (
  <ul className="flex flex-wrap gap-10 mb-2 font-medium font-parkinsans text-base items-center">
    {navLinks.map(({ label, icon, to, dropdown, external }) => (
      <li key={label} className="flex items-center">
        {external ? (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-emerald-700  transition-colors"
          >
            {icon}
            {label}
          </a>
        ) : (
          <Link
            to={to}
            className="flex items-center gap-1 hover:text-emerald-700 transition-colors"
          >
            {icon} {label}
            {dropdown && <span className="ml-1 text-xs">▼</span>}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

export default NavLinks;
