import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const routes = [
  {
    id: '1',
    origen: 'Conjunto Residencial SAM...',
    destino: 'Universidad ICESI',
    hora: '06:30 a. m.',
    driverName: 'Carlos Sánchez',
    availableSeats: 3,
    price: '5,000',
    vehicleImage: '/vehicles/vehicle1.png',
  },
  {
    id: '2',
    origen: 'Centro Comercial Unicentro',
    destino: 'Pontificia Universidad Javeriana',
    hora: '07:00 a. m.',
    driverName: 'Ana García',
    availableSeats: 2,
    price: '6,500',
    vehicleImage: '/vehicles/vehicle2.png',
  },
  {
    id: '3',
    origen: 'Barrio San Fernando',
    destino: 'Clínica Valle del Lili',
    hora: '08:15 a. m.',
    driverName: 'Luis Pérez',
    availableSeats: 4,
    price: '4,500',
    vehicleImage: '/vehicles/vehicle3.png',
  },
  {
    id: '4',
    origen: 'Ciudad Jardín',
    destino: 'Universidad Autónoma de Occidente',
    hora: '09:00 a. m.',
    driverName: 'María Rodríguez',
    availableSeats: 1,
    price: '7,000',
    vehicleImage: '/vehicles/vehicle4.png',
  },
];

const RouteCard = ({
  id,
  origen,
  destino,
  hora,
  driverName,
  availableSeats,
  price,
  vehicleImage,
}: {
  id: string;
  origen: string;
  destino: string;
  hora: string;
  driverName: string;
  availableSeats: number;
  price: string;
  vehicleImage: string;
}) => {
  const driverImages = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const driverImage = driverImages[parseInt(id) % driverImages.length];

  return (
    <div className="bg-card rounded-2xl shadow-lg p-5 mb-4 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center">
          <Image
            src={vehicleImage}
            alt="Vehicle"
            width={64}
            height={64}
            className="rounded-full mr-3"
          />
          <div>
            <p className="font-bold text-lg">{origen}</p>
            <p className="text-sm text-muted-foreground">{destino}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">${price}</p>
          <p className="text-sm text-muted-foreground">COP</p>
        </div>
      </div>

      <div className="border-t border-border my-4"></div>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center overflow-hidden">
          <Image
            src={driverImage}
            alt="Driver Avatar"
            width={40}
            height={40}
            className="size-10 rounded-full mr-3 overflow-hidden"
          />
          <div>
            <p className="font-semibold">{driverName}</p>
            <p className="text-sm text-muted-foreground">{hora}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">{availableSeats} cupos</p>
          <p className="text-sm text-muted-foreground">disponibles</p>
        </div>
      </div>
    </div>
  );
};

const CuposPage = () => {
  return (
    <div className="bg-background text-foreground p-4 max-w-md mx-auto font-sans min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Rutas Disponibles</h1>
      <div className="space-y-4">
        {routes.map((route) => (
          <Link href={`/home/cupos/${route.id}`} key={route.id}>
            <RouteCard {...route} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CuposPage;
