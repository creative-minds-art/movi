'use client';

import { FaBus, FaUniversity, FaRoute } from 'react-icons/fa';

const InfoCards = () => {
  // Dummy data for demonstration
  const nextTrip = {
    time: '8:30 AM',
    destination: 'Universidad del Valle',
  };

  const currentCampus = {
    name: 'Universidad Icesi',
  };

  const favoriteRoute = {
    name: 'Pasoancho - Univalle',
  };

  return (
    <div className="absolute top-20 left-0 right-0 p-4 grid grid-cols-3 gap-4 z-10">
      {/* Next Trip Card */}
      <div className="bg-card/80 backdrop-blur-lg p-4 rounded-lg text-center">
        <FaBus className="text-primary text-2xl mx-auto mb-2" />
        <p className="text-xs text-muted-foreground">Próximo Viaje</p>
        <p className="font-bold text-foreground text-sm">{nextTrip.destination}</p>
        <p className="text-xs text-muted-foreground">{nextTrip.time}</p>
      </div>

      {/* Current Campus Card */}
      <div className="bg-card/80 backdrop-blur-lg p-4 rounded-lg text-center">
        <FaUniversity className="text-primary text-2xl mx-auto mb-2" />
        <p className="text-xs text-muted-foreground">Campus Actual</p>
        <p className="font-bold text-foreground text-sm">{currentCampus.name}</p>
      </div>

      {/* Favorite Route Card */}
      <div className="bg-card/80 backdrop-blur-lg p-4 rounded-lg text-center">
        <FaRoute className="text-primary text-2xl mx-auto mb-2" />
        <p className="text-xs text-muted-foreground">Ruta Favorita</p>
        <p className="font-bold text-foreground text-sm">{favoriteRoute.name}</p>
      </div>
    </div>
  );
};

export default InfoCards;
