import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import './About.css';

const About: React.FC = () => {
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

  const skills: Skill[] = [
    {
      category: "Languages & Tools",
      technologies: "Java, Golang, TypeScript-React, Git, Playwright, AI/LLMs (ChatGPT, Claude)"
    },
    {
      category: "Cloud & Infrastructure",
      technologies: "AWS, Azure, Kubernetes, Docker, CI/CD, GitHub Actions"
    },
    {
      category: "Databases & Systems",
      technologies: "PostgreSQL, MS SQL, Distributed Systems, ETL Pipelines, WebSocket, Microservices, Datadog"
    }
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>About Me</motion.h2>
        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-image-container">
            <div className="image-wrapper">
              <div className="image-inner">
                <img
                  src={process.env.PUBLIC_URL + '/LinkedInHeadshot.jpg'}
                  alt="Wasif Siddique"
                  className="about-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              I build systems that handle real scale and real consequences. At <a href="https://www.axon.com" target="_blank" rel="noopener noreferrer" className="company-link">Axon</a>, my evidence processing platform maintained 99.99% uptime for critical public safety data. At <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="company-link">Nike</a>, I optimized retail pipelines processing 50 million daily transactions with zero data loss.
            </p>
            <p style={{ marginTop: '1rem' }}>
              My work delivers measurable impact. At <a href="https://www.directv.com/" target="_blank" rel="noopener noreferrer" className="company-link">DIRECTV</a>, I caught 50 weekly schedule conflicts, saved $5M annually, and cut manual work by 85%. At <a href="https://www.nordstrom.com" target="_blank" rel="noopener noreferrer" className="company-link">Nordstrom</a>, I slashed supply chain time in half, automated hiring workflows, and reduced onboarding by 40%. I'm tech-agnostic and love solving hard problems with the right tools.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-category">
                  <h3>{skill.category}</h3>
                  <span>{skill.technologies}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;