import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationProps } from '../types';
import './Navigation.css';

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="nav">
      <motion.div
        className="nav-container"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button className="logo" onClick={() => handleNavClick('home')}>Wasif Siddique</button>

        {/* Desktop links */}
        <ul className="nav-links">
          {navItems.map(({ label, id }) => (
            <li key={id}><button onClick={() => handleNavClick(id)}>{label}</button></li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => handleNavClick(id)}>{label}</button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;