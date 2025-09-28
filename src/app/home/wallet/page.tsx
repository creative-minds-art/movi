'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from '@/components/ui/carousel';
import { FaUserCircle, FaTh } from 'react-icons/fa';
import { ScrollArea } from '@/components/ui/scroll-area';

function WalletPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = useCallback((carouselApi: any) => {
    setCurrentSlide(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <ScrollArea className="h-full ">
      <div className="h-full bg-background text-foreground font-sans">
        <div className="container mx-auto p-6">
          {/* Header */}
          <header className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 rounded-full px-4 py-2 bg-card border border-border">
              <FaUserCircle className="text-lg text-primary" />
              <span className="text-sm font-medium">Hola, Usuario</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
                Tarjetas
              </button>
              <button className="p-2 rounded-full bg-card border border-border">
                <FaUserCircle className="text-lg" />
              </button>
              <button className="p-2 rounded-full bg-card border border-border">
                <FaTh className="text-lg" />
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="mt-12">
            {/* Total Balance Section */}
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Saldo Total VirtuVault
              </p>
              <div className="flex justify-center items-center mt-3">
                <p className="text-5xl font-bold tracking-tight">$53,987.02</p>
                <span className="text-xs font-semibold ml-3 px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
                  USD
                </span>
              </div>
            </div>

            {/* Card Stack Section */}
            <div className="mt-16 relative h-96 flex justify-center items-center">
              {/* Background cards */}
              <div className="absolute w-80 h-52 rounded-3xl transform rotate-6 -translate-y-6 opacity-70 blur-sm bg-card/60"></div>
              <div className="absolute w-80 h-52 rounded-3xl transform -rotate-6 translate-y-6 opacity-70 blur-sm bg-card/60"></div>

              {/* Main card */}
              <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="relative z-10 w-80 h-56 rounded-3xl p-6 flex flex-col justify-between shadow-2xl border-2 border-yellow-400 dotted-border bg-card">
                        <div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">
                                Saldo
                              </span>
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                BTC
                              </span>
                            </div>
                            <button className="text-foreground text-xs px-4 py-2 rounded-full bg-background/10">
                              Editar
                            </button>
                          </div>
                          <p className="text-3xl font-semibold mt-2">
                            $5,756.32
                          </p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Número de Tarjeta
                            </p>
                            <p className="text-lg font-medium tracking-wider">
                              •••• 3546
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full border-2 border-transparent bg-[#EB001B]"></div>
                            <div className="w-10 h-10 rounded-full -ml-4 border-2 border-transparent bg-[#F79E1B]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  {/* Add more CarouselItems for additional cards if needed */}
                  <CarouselItem>
                    <div className="p-1">
                      <div className="relative z-10 w-80 h-56 rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-border bg-card">
                        <div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">
                                Saldo
                              </span>
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                ETH
                              </span>
                            </div>
                            <button className="text-foreground text-xs px-4 py-2 rounded-full bg-background/10">
                              Editar
                            </button>
                          </div>
                          <p className="text-3xl font-semibold mt-2">
                            $1,234.56
                          </p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Número de Tarjeta
                            </p>
                            <p className="text-lg font-medium tracking-wider">
                              •••• 7890
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full border-2 border-transparent bg-[#627EEA]"></div>
                            <div className="w-10 h-10 rounded-full -ml-4 border-2 border-transparent bg-[#8A92B2]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>

            {/* Card indicator dots */}
            <div className="text-center -mt-8">
              <div className="flex justify-center items-center space-x-1.5">
                {[...Array(2)].map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full ${
                      currentSlide === index
                        ? 'w-3 bg-foreground'
                        : 'w-1.5 bg-muted'
                    }`}
                    onClick={() => api && api.scrollTo(index)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Add New Card Button */}
            <div className="mt-16 flex justify-center">
              <button className="w-full bg-transparent border-2 border-dashed border-foreground text-foreground py-4 rounded-full flex items-center justify-center space-x-2 font-semibold">
                <span>+ Añadir Nueva Tarjeta</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </ScrollArea>
  );
}
export default WalletPage;
