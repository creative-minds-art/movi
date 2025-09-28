'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

const ProfilePage = () => {
  const [userData] = useState({
    name: 'Usuario',
    university: 'Universidad Nacional',
    rating: 4.8,
    trips: 24,
    points: 250,
    profileImage:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNFMEUwRTAiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSIzMiIgcj0iMTIiIGZpbGw9IiM5RTlFOUUiLz4KPHBhdGggZD0iTTIwIDYwQzIwIDUyLjI2ODEgMjYuMjY4MSA0NiAzNCA0Nkg0NkM1My43MzE5IDQ2IDYwIDUyLjI2ODEgNjAgNjBWODBIMjBWNjBaIiBmaWxsPSIjOUU5RTlFIi8+Cjwvc3ZnPgo=',
  });

  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    {
      icon: '🏫',
      title: 'Mi Universidad',
      subtitle: 'Universidad Nacional de Colombia',
      bgColor: 'bg-blue-50',
      action: () => console.log('Universidad clicked'),
    },
    {
      icon: '🚐',
      title: 'Mis Rutas',
      subtitle: 'Rutas favoritas y frecuentes',
      bgColor: 'bg-purple-50',
      action: () => console.log('Rutas clicked'),
    },
    {
      icon: '💳',
      title: 'Métodos de Pago',
      subtitle: 'Tarjetas y billetera',
      bgColor: 'bg-green-50',
      action: () => console.log('Pago clicked'),
    },
    {
      icon: '📋',
      title: 'Historial de Viajes',
      subtitle: 'Ver todos mis viajes',
      bgColor: 'bg-orange-50',
      action: () => console.log('Historial clicked'),
    },
    {
      icon: '❓',
      title: 'Ayuda y Soporte',
      subtitle: 'Preguntas frecuentes',
      bgColor: 'bg-pink-50',
      action: () => console.log('Soporte clicked'),
    },
    {
      icon: '⚙️',
      title: 'Configuración',
      subtitle: 'Privacidad y notificaciones',
      bgColor: 'bg-lime-50',
      action: () => console.log('Configuración clicked'),
    },
  ];

  const navItems = [
    { icon: '🏠', label: 'Inicio', key: 'home' },
    { icon: '🔍', label: 'Buscar', key: 'search' },
    { icon: '📋', label: 'Reservas', key: 'bookings' },
    { icon: '👤', label: 'Perfil', key: 'profile' },
  ];

  const handleMenuItemClick = (item: { action: () => void }) => {
    item.action();
  };

  const handleClaimPoints = () => {
    alert('¡Función de canje próximamente!');
  };

  const handleEdit = () => {
    alert('Función de edición próximamente');
  };

  const handleBackClick = () => {
    console.log('Back clicked');
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }

    return stars.join('');
  };

  return (
    <ScrollArea className="h-full">
      <div className="w-full mx-auto min-h-screen relative font-sans bg-background text-foreground">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 pt-12 bg-card border-b border-border">
          <button
            onClick={handleBackClick}
            className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            ←
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Perfil</h1>
          <button
            onClick={handleEdit}
            className="text-blue-600 text-base font-medium hover:text-blue-700 transition-colors"
          >
            Editar
          </button>
        </div>

        {/* Profile Section */}
        <div className="px-5 py-5 text-center bg-card">
          <div className="relative w-20 h-20 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
            <img
              src={userData.profileImage}
              alt="Perfil"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 border-card">
              📷
            </div>
          </div>

          <div className="text-xl font-semibold mb-1 text-foreground">
            {userData.name}
          </div>
          <div className="text-muted-foreground text-sm mb-4">
            Estudiante • {userData.university}
          </div>

          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-base">{renderStars(userData.rating)}</span>
            <span className="font-semibold text-base text-foreground">
              {userData.rating}
            </span>
            <span className="text-muted-foreground text-sm">
              • {userData.trips} viajes
            </span>
          </div>
        </div>

        {/* Rewards Card */}
        <div className="mx-5 mb-5">
          <div className="bg-gradient-to-br from-primary to-primary-foreground rounded-xl p-5 text-primary-foreground relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-white opacity-10 rounded-full"></div>
            <div className="text-base font-semibold mb-2">Movi Points</div>
            <div className="text-sm opacity-90 mb-4">
              Acumula puntos y obtén descuentos
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold">{userData.points}</div>
                <div className="text-xs opacity-80">puntos disponibles</div>
              </div>
              <button
                onClick={handleClaimPoints}
                className="bg-white bg-opacity-20 border border-white border-opacity-30 px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-opacity-30 transition-all"
              >
                Canjear
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="px-5">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuItemClick(item)}
              className="w-full flex items-center justify-between py-4 border-b border-border last:border-b-0 hover:bg-muted transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-6 h-6 rounded-md ${item.bgColor} flex items-center justify-center text-base`}
                >
                  {item.icon}
                </div>
                <div className="text-left">
                  <div className="text-base font-medium text-foreground">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
              <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                ›
              </span>
            </button>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-20"></div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-sm w-full bg-card border-t border-border flex py-2">
          {navItems.map((nav) => (
            <button
              key={nav.key}
              onClick={() => setActiveTab(nav.key)}
              className={`flex-1 text-center p-2 transition-colors ${
                activeTab === nav.key
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="text-xl mb-1">{nav.icon}</div>
              <div className="text-xs font-medium">{nav.label}</div>
            </button>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ProfilePage;
