import { useState, useEffect } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme ? savedTheme === 'dark' : prefersDark;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={60}
        className="shadow-lg"
      />
    </div>
  );
};

export default ThemeToggle;
