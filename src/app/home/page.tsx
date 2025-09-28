'use client';

import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import InfoCards from '@/components/home/InfoCards';
import SearchBar from '@/components/home/SearchBar';
import SuggestedDestinations from '@/components/home/SuggestedDestinations';
import { useTheme } from 'next-themes';

const universities = [
  {
    name: 'Universidad del Valle',
    lngLat: [-76.5306, 3.3769],
  },
  {
    name: 'Pontificia Universidad Javeriana Cali',
    lngLat: [-76.5319, 3.3492],
  },
  {
    name: 'Universidad Icesi',
    lngLat: [-76.5211, 3.3417],
  },
  {
    name: 'Universidad de San Buenaventura Cali',
    lngLat: [-76.5394, 3.3639],
  },
  {
    name: 'Universidad Autónoma de Occidente',
    lngLat: [-76.5394, 3.3639],
  },
  {
    name: 'Universidad Santiago de Cali',
    lngLat: [-76.5359, 3.3709],
  },
  {
    name: 'Institución Universitaria Antonio José Camacho',
    lngLat: [-76.5283, 3.4208],
  },
  {
    name: 'Escuela Nacional del Deporte',
    lngLat: [-76.5386, 3.3987],
  },
];

const HomePage: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const { theme } = useTheme();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;
    mapboxgl.accessToken = token;

    if (!mapContainerRef.current) return;

    // Remove existing map if it's already initialized to prevent multiple map instances
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style:
        theme === 'dark'
          ? 'mapbox://styles/mapbox/dark-v11'
          : 'mapbox://styles/mapbox/light-v11',
      center: [-76.532, 3.4516], // Cali
      zoom: 12,
    });

    map.on('load', () => {
      universities.forEach((uni) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(/marker.svg)'; // Using the new SVG
        el.style.width = '48px';
        el.style.height = '48px';
        el.style.backgroundSize = '100%';

        new mapboxgl.Marker(el)
          .setLngLat(uni.lngLat as [number, number])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div class="${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } p-3 rounded-lg shadow-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}">
                <h3 class="font-bold text-lg mb-1">${uni.name}</h3>
                <p class="text-sm">¡Explora las rutas disponibles desde aquí!</p>
              </div>`
            )
          )
          .addTo(map);
      });
    });

    mapRef.current = map;

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [theme]);

  return (
    <div className="relative w-screen h-[100dvh] bg-background">
      <div className="absolute top-0 left-0 right-0 z-10 p-4">
        <div onClick={toggleSuggestions}>
          <SearchBar />
        </div>
        {showSuggestions && <SuggestedDestinations />}
      </div>

      {/* <InfoCards /> */}
      <div className="absolute inset-0">
        <div ref={mapContainerRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default HomePage;
