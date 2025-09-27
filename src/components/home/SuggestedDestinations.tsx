'use client';

import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const suggestions = [
  { name: 'Unicentro', address: 'Cra. 100 #5-169' },
  { name: 'Jardín Plaza', address: 'Cra. 98 #16-200' },
  { name: 'Universidad del Valle', address: 'Calle 13 # 100-00' },
];

const SuggestedDestinations = () => {
  return (
    <div className="mt-4">
      <div className="bg-card/80 backdrop-blur-lg p-4 rounded-lg shadow-lg">
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-center py-3 border-b border-border/10 last:border-b-0">
              <div className="bg-muted/50 p-2 rounded-full mr-4">
                <FaMapMarkerAlt className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-foreground font-semibold">{suggestion.name}</p>
                <p className="text-muted-foreground text-sm">{suggestion.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuggestedDestinations;