import React from 'react';
import { motion } from 'framer-motion';
import { NavigationProps } from '../types';

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  return (
    <nav className="nav">
      <motion.div 
        className="nav-container"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;