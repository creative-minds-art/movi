import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface RouteData {
  id: string;
  driverName: string;
  driverImage: string;
  vehicle: string;
  price: string;
  pickup: string;
  dropoff: string;
  pickupTime: string;
  dropoffTime: string;
  date: string;
  coordinates: [number, number][];
  reservedAt: Date;
}

interface ReservationState {
  reservedRoutes: RouteData[];
  addReservation: (route: Omit<RouteData, 'reservedAt'>) => void;
  removeReservation: (routeId: string) => void;
  getReservation: (routeId: string) => RouteData | undefined;
  clearAllReservations: () => void;
}

export const useReservationStore = create<ReservationState>()(
  persist(
    (set, get) => ({
      reservedRoutes: [],
      
      addReservation: (route) => {
        const newReservation: RouteData = {
          ...route,
          reservedAt: new Date(),
        };
        
        set((state) => ({
          reservedRoutes: [...state.reservedRoutes, newReservation],
        }));
      },
      
      removeReservation: (routeId) => {
        set((state) => ({
          reservedRoutes: state.reservedRoutes.filter(
            (route) => route.id !== routeId
          ),
        }));
      },
      
      getReservation: (routeId) => {
        const state = get();
        return state.reservedRoutes.find((route) => route.id === routeId);
      },
      
      clearAllReservations: () => {
        set({ reservedRoutes: [] });
      },
    }),
    {
      name: 'mobi-reservations',
      version: 1,
    }
  )
);