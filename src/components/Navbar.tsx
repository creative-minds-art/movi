'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { FaWallet, FaTicketAlt, FaUser } from 'react-icons/fa';
import { ThemeToggleButton } from './ThemeToggleButton';

const navItems = [
  {
    name: 'Inicio',
    icon: <AiFillHome size={20} />,
    href: '/home',
    path: '/home',
  },
  {
    name: 'Billetera',
    icon: <FaWallet size={20} />,
    href: '/home/wallet',
    path: '/home/wallet',
  },
  {
    name: 'Cupos',
    icon: <FaTicketAlt size={20} />,
    href: '/home/cupos',
    path: '/home/cupos',
  },
  {
    name: 'Perfil',
    icon: <FaUser size={20} />,
    href: '/home/profile',
    path: '/home/profile',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (itemPath: string) => {
    if (itemPath === '/home') {
      return pathname === '/home';
    }
    return pathname === itemPath;
  };

  return (
    <div className="w-full fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.5 }}
        className="bg-background/90 backdrop-blur-lg rounded-2xl px-6 py-3 flex items-center justify-around shadow-2xl border border-border/10"
        style={{
          background: 'linear-gradient(135deg, var(--background) 0%, var(--card) 100%)',
        }}
      >
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link key={item.name} href={item.href} passHref>
              <motion.div
                className="relative flex items-center justify-center px-4 py-2 cursor-pointer rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                <motion.div
                  className="relative z-10 flex items-center space-x-2"
                  animate={{
                    color: active ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {active && (
                    <motion.span
                      className="text-sm font-medium whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </motion.div>
                
                {!active && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <ThemeToggleButton />
        </div>
      </motion.nav>
    </div>
  );
}
