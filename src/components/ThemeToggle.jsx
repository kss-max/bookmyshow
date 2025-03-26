import React from 'react';
import { Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <Button 
      variant={darkMode ? 'light' : 'dark'} 
      onClick={toggleTheme}
      className="theme-toggle rounded-circle"
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </Button>
  );
};

export default ThemeToggle;