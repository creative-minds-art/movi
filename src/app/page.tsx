'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const backgroundImageSrc =
    theme === 'light' ? '/landing/car_full_white.png' : '/landing/car_full.png';

  return (
    <div className={`relative w-full  mx-auto  min-h-screen overflow-hidden ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-black'}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImageSrc}
          alt="Movi 2"
          fill
          className="object-cover object-[25%_center]"
          priority
        />
        {/* Dark overlay for better text readability */}

        {/* Fog Effect Layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-300/80 via-gray-400/60 to-gray-500/40"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: 'easeOut',
          }}
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 40%, rgba(200,200,200,0.3) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(180,180,180,0.25) 0%, transparent 70%),
              linear-gradient(to bottom, rgba(220,220,220,0.2) 0%, rgba(160,160,160,0.15) 50%, rgba(100,100,100,0.1) 100%)
            `,
          }}
        />

        {/* Secondary fog layer */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.2,
            ease: 'easeInOut',
          }}
          style={{
            background: `
              radial-gradient(ellipse at 60% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
              radial-gradient(ellipse at 40% 70%, rgba(190,190,190,0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, rgba(170,170,170,0.3) 0%, transparent 60%)
            `,
          }}
        />

        {/* Floating fog particles */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ opacity: 0, y: -50 }}
          transition={{
            duration: 4,
            delay: 0.8,
            ease: 'easeOut',
          }}
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 0%, transparent 30%),
              radial-gradient(circle at 75% 15%, rgba(200,200,200,0.3) 0%, transparent 25%),
              radial-gradient(circle at 15% 60%, rgba(180,180,180,0.3) 0%, transparent 35%),
              radial-gradient(circle at 85% 80%, rgba(160,160,160,0.2) 0%, transparent 40%)
            `,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative py-4 h-[100dvh] flex flex-col">
        {/* Header */}
        <motion.header
          className="flex justify-start items-center p-4 relative z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2,
            ease: 'easeOut',
          }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 2.3,
              ease: 'easeOut',
            }}
          >
            <Image
              src="/auth/logo.png"
              alt="MobiU Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <h1 className="text-xl font-semibold">Movi</h1>
          </motion.div>
        </motion.header>
        {/* Hero Section */}
        <main className="relative flex min-h-screen flex-col  justify-between p-6 pb-20 max-w-md z-10">
          {/* Content Overlay */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            {/* Top Content */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 2.5,
                ease: 'easeOut',
              }}
            >
              <motion.h2
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 3,
                  ease: 'easeOut',
                }}
              >
                Movi
              </motion.h2>
              <motion.p
                className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 3.3,
                  ease: 'easeOut',
                }}
              >
                Encuentra cupos disponibles y reserva tu lugar en solo 3 pasos.
              </motion.p>
            </motion.div>

            {/* Bottom Content */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 3.5,
                ease: 'easeOut',
              }}
            >
              {/* Network Info */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 4,
                  ease: 'easeOut',
                }}
              >
                <p className={`text-sm mb-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  La red de cupos más grande
                </p>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  para estudiantes
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="space-y-3 flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 4.3,
                  ease: 'easeOut',
                }}
              >
                <Link href="/login" passHref>
                  <motion.button
                    className={`w-full py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-between ${
                      theme === 'light'
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <span>Iniciar sesion</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
