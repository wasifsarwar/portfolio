import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Wasif Siddique';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); // Speed of typing (80ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>
          Hello, I'm <span className="highlight typewriter">{displayedText}<span className="cursor">|</span></span>
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          Software Engineer
        </motion.p>
        <motion.p variants={itemVariants} className="hero-description">
          Software Engineer with 4.5 years designing and scaling globally distributed systems, microservices, and cloud architectures. Expert in Java, Golang, and TypeScript-React.
        </motion.p>
        <motion.div variants={itemVariants} className="hero-buttons">
          <button
            className="cta-primary"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>
          <button
            className="cta-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;