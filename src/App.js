import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Footer from './components/footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import Sports from './pages/Sports';
import ThemeToggle from './components/ThemeToggle';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;