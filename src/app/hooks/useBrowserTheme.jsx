'use client';

import { useEffect, useState } from "react";

function useBrowserTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    handleChange(mediaQuery);

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return theme === 'dark' ? true : false;;
}

export default useBrowserTheme;
