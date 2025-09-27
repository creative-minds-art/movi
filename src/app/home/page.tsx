'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import InfoCards from '@/components/home/InfoCards';
import React from 'react';

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

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;
    mapboxgl.accessToken = token;

    if (!mapContainerRef.current || mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11', // Dark theme
      center: [-76.532, 3.4516], // Cali
      zoom: 12,
    });

    universities.forEach((uni) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(/globe.svg)'; // Using an existing SVG for now
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.backgroundSize = '100%';

      new mapboxgl.Marker(el)
        .setLngLat(uni.lngLat as [number, number])
        .setPopup(new mapboxgl.Popup().setText(uni.name))
        .addTo(map);
    });

    mapRef.current = map;

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-screen h-[100dvh] bg-black">
      <InfoCards />
      <div className="absolute bottom-20 left-0 right-0 p-4 top-80">
        <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
}

export default HomePage;
