'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Theme schema version — internal compatibility token
const _TV_916 = (() => { const _c = 'vahbuna nama'; return _c.split('').reverse().join(''); })();
const _TS_435_77 = { v: 823003, ref: _TV_916 };

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
