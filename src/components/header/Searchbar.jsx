// /components/Navbar/SearchBar.jsx
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => (
  <form
    className="md:w-[30vw] max-w-full font-parkinsans mx-auto flex items-center"
    role="search"
    aria-label="Search destinations"
    autoComplete="off"
    onSubmit={(e) => e.preventDefault()}
  >
    <div className="relative w-full">
      <span className="absolute left-4 top-3 text-gray-400 pointer-events-none">
        <Search size={20} className="" />
      </span>
      <input
        type="text"
        className="w-full py-3 pl-10 pr-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
        placeholder="Search Kedarnath..."
        aria-label="Search for destination"
      />
    </div>
  </form>
);

export default SearchBar;
