'use client';
import Link from 'next/link';
import Image from 'next/image';
import mapboxgl from 'mapbox-gl';

import React, { useEffect, useRef } from 'react';
import {
  FaArrowLeft,
  FaEyeSlash,
  FaChevronRight,
  FaStar,
  FaDollarSign,
} from 'react-icons/fa';
import { useTheme } from 'next-themes';
import 'mapbox-gl/dist/mapbox-gl.css';

const RouteDetailPage = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const { theme } = useTheme();

  // Mock data - replace with actual data fetching
  const route = {
    driverName: 'SAMUEL HUMBERTO',
    driverImage: '/vehicles/vehicle1.png',
    vehicle: 'JAC Motors S2, GCU860',
    price: '7.995',
    pickup:
      'Calle 36#128-321, Auto. Cali - Jamundi #760030, Cali, Valle del C...',
    dropoff: 'Cra. 86 #34-50, Comuna 17, Cali, Valle del Cauca, Colombia',
    pickupTime: '10:37 PM',
    dropoffTime: '10:46 PM',
    date: '26 de sept 10:23PM',
  };

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;
    mapboxgl.accessToken = token;

    if (mapContainerRef.current && !mapRef.current) {
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
        const routeCoordinates: [number, number][] = [
          [-76.5211, 3.3417], // Punto de origen
          [-76.525, 3.345], // Punto intermedio 1
          [-76.528, 3.35], // Punto intermedio 2
          [-76.5319, 3.3492], // Punto intermedio 3
          [-76.534, 3.36], // Punto intermedio 4
          [-76.5306, 3.3769], // Punto de destino
        ];

        // Crear elemento personalizado para marcador de origen
        const originMarkerElement = document.createElement('div');
        originMarkerElement.className = 'origin-marker';
        originMarkerElement.style.cssText = `
          width: 30px;
          height: 30px;
          background-color: #22c55e;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 12px;
        `;
        originMarkerElement.innerHTML = 'O';

        // Crear elemento personalizado para marcador de destino
        const destinationMarkerElement = document.createElement('div');
        destinationMarkerElement.className = 'destination-marker';
        destinationMarkerElement.style.cssText = `
          width: 30px;
          height: 30px;
          background-color: #ef4444;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 12px;
        `;
        destinationMarkerElement.innerHTML = 'D';

        // Agregar marcador de origen
        new mapboxgl.Marker({ element: originMarkerElement })
          .setLngLat(routeCoordinates[0])
          .addTo(map);

        // Agregar marcador de destino
        new mapboxgl.Marker({ element: destinationMarkerElement })
          .setLngLat(routeCoordinates[routeCoordinates.length - 1])
          .addTo(map);

        // Agregar fuente de datos para la ruta
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: routeCoordinates,
            },
          },
        });

        // Agregar capa de línea principal de la ruta
        map.addLayer({
          id: 'route-line',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#3b82f6',
            'line-width': 6,
          },
        });

        // Agregar capa de línea animada encima
        map.addLayer({
          id: 'route-line-animated',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#60a5fa',
            'line-width': 4,
            'line-dasharray': [0, 4, 3],
          },
        });

        // Animación de la línea
        const animationStep = 30;
        let step = 0;
        function animateDashArray() {
          step += 1;
          const dashArray = [0, 4, step / animationStep];
          map.setPaintProperty(
            'route-line-animated',
            'line-dasharray',
            dashArray
          );

          if (step < 1000) {
            requestAnimationFrame(animateDashArray);
          }
        }

        // Ajustar la vista del mapa para mostrar toda la ruta
        const bounds = new mapboxgl.LngLatBounds();
        routeCoordinates.forEach((coord) => bounds.extend(coord));
        map.fitBounds(bounds, { padding: 50 });

        // Iniciar animación después de un pequeño delay
        setTimeout(() => {
          animateDashArray();
        }, 500);
      });

      mapRef.current = map;
    }

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white max-w-md mx-auto font-sans min-h-screen">
      <div className="absolute top-5 left-5 z-10">
        <Link href="/home/cupos">
          <FaArrowLeft className="text-2xl" />
        </Link>
      </div>
      <div ref={mapContainerRef} className="h-64 bg-gray-800"></div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">
              Viaje Economy con {route.driverName}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{route.date}</p>
            <p className="text-lg font-semibold mt-2">
              ${route.price} - {route.vehicle}
            </p>
          </div>
          <Image
            src={route.driverImage}
            alt={route.driverName}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <button className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white w-full py-3 rounded-lg font-semibold mb-6">
          Recibo
        </button>

        <div className="border-t border-gray-200 dark:border-gray-800 my-6"></div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaDollarSign className="text-2xl mr-4" />
              <p>No se agregó un monto extra</p>
            </div>
            <button className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg font-semibold">
              Agregar monto extra
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaStar className="text-2xl mr-4" />
              <p>Sin calificación</p>
            </div>
            <button className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg font-semibold">
              Calificar
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaEyeSlash className="text-2xl mr-4" />
              <div>
                <p>Ocultar este arrendamiento</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Eliminar este arrendamiento de tu actividad anterior
                </p>
              </div>
            </div>
            <FaChevronRight className="text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetailPage;
