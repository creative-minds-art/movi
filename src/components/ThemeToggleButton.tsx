'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}