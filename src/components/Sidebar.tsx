'use client';

import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-80 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-8 mt-4">
            <h2 className="text-2xl font-bold">MobiU</h2>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            <a
              href="#"
              className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors"
            >
              Vehículos
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors"
            >
              Configurar
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors"
            >
              Prueba de manejo
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors"
            >
              Comprar
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors"
            >
              Propietarios
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors"
            >
              Acerca de
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors"
            >
              Soporte
            </a>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Cerrar sesión</button>
        </div>
      </div>
    </>
  );
}