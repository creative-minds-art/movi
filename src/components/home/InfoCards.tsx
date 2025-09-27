'use client';

import Image from 'next/image';
import { FaBus, FaUniversity, FaRoute } from 'react-icons/fa';

const InfoCards = () => {
  // Dummy data for demonstration
  const nextTrip = {
    time: '8:30 AM',
    destination: 'Universidad del Valle',
    availableSpots: 3,
    price: '$2.50',
  };

  const currentCampus = {
    name: 'Universidad Icesi',
    status: 'Abierto', // Example status
  };

  const favoriteRoute = {
    name: 'Pasoancho - Univalle',
    distance: '5.2 km',
    duration: '15 min',
  };

  return (
    <div className="absolute top-10 left-0 right-0 p-4 grid grid-cols-2 gap-4 z-10">
      {/* Next Trip Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg col-span-2 flex items-center">
        <Image
          src={'/landing/car_full.png'}
          width={60}
          height={60}
          alt="Driver icon"
          className="size-20 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="font-bold text-white">Próximo Viaje</h2>
          <p className="text-gray-400">
            {nextTrip.destination} - {nextTrip.time}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-white">
              Cupos disponibles: {nextTrip.availableSpots}
            </span>
          </div>
        </div>
      </div>

      {/* Current Campus Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
        <div className="flex items-center">
          <FaUniversity className="text-blue-400 text-2xl mr-2" />
          <div>
            <p className="text-gray-400">Campus Actual</p>
            <p className="font-bold text-white">{currentCampus.name}</p>
            <p className="text-gray-400">{currentCampus.status}</p>
          </div>
        </div>
      </div>

      {/* Favorite Route Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
        <div className="flex items-center">
          <FaRoute className="text-purple-400 text-2xl mr-2" />
          <div>
            <p className="text-gray-400">Ruta Favorita</p>
            <p className="font-bold text-white">{favoriteRoute.name}</p>
            <p className="text-gray-400">
              {favoriteRoute.distance} ({favoriteRoute.duration})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
