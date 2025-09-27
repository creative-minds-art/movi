'use client';

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <FaSearch className="text-muted-foreground" />
      </div>
      <input
        type="text"
        placeholder="¿A dónde vas?"
        className="w-full bg-card text-foreground p-4 pl-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;