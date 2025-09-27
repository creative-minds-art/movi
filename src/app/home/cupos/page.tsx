import React from 'react';

const routes = [
  {
    origen: 'Conjunto Residencial SAM...',
    destino: 'Universidad ICESI',
    hora: '06:30 a. m.',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cfdfeeab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driverName: 'Carlos Sánchez',
    availableSeats: 3,
  },
  {
    origen: 'Centro Comercial Unicentro',
    destino: 'Pontificia Universidad Javeriana',
    hora: '07:00 a. m.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driverName: 'Ana García',
    availableSeats: 2,
  },
  {
    origen: 'Barrio San Fernando',
    destino: 'Clínica Valle del Lili',
    hora: '08:15 a. m.',
    img: 'https://images.unsplash.com/photo-1507003211169-e695c6edd655?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driverName: 'Luis Pérez',
    availableSeats: 4,
  },
  {
    origen: 'Ciudad Jardín',
    destino: 'Universidad Autónoma de Occidente',
    hora: '09:00 a. m.',
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driverName: 'María Rodríguez',
    availableSeats: 1,
  },
  // Agrega más objetos de ruta aquí
];

const RouteCard = ({
  origen,
  destino,
  hora,
  img,
  driverName,
  availableSeats,
}: {
  origen: string;
  destino: string;
  hora: string;
  img: string;
  driverName: string;
  availableSeats: number;
}) => {
  return (
    <div className="rounded-lg shadow-lg p-5 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="p-1 rounded-full mr-4 shadow-md flex-shrink-0">
          <img
            alt="Driver icon"
            className="w-12 h-12 rounded-full object-cover"
            src={img}
          />
        </div>
        <div className="text-white">
          <p className="font-bold text-lg mb-1">{origen}</p>
          <p className="text-sm text-gray-300 mb-1">{destino}</p>
          <p className="text-xs text-gray-400">{hora}</p>
          <p className="text-xs text-gray-400">Conductor: {driverName}</p>
          <p className="text-xs text-gray-400">Asientos disponibles: {availableSeats}</p>
        </div>
      </div>
      <button className="hover:bg-gray-600 text-white py-2 px-5 rounded-full flex items-center text-sm transition-colors duration-200 shadow-md">
        <span className="material-icons text-base mr-2">directions_car</span>
        Reservar Cupo
      </button>
    </div>
  );
};

const CuposPage = () => {
  return (
    <div className="p-4 max-w-md mx-auto font-sans min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Rutas Disponibles</h1>
      <div className="space-y-4">
        {routes.map((route, idx) => (
          <RouteCard key={idx} {...route} />
        ))}
      </div>
    </div>
  );
};

export default CuposPage;
