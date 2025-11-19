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
              I engineer high-performance systems that handle massive scale. At <a href="https://www.axon.com" target="_blank" rel="noopener noreferrer" className="company-link">Axon</a>, I built evidence processing platforms that maintained 99.99% uptime for critical public safety data. Before that, I optimized retail pipelines at <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="company-link">Nike</a> to process 50 million daily transactions with zero data loss.
            </p>
            <p style={{ marginTop: '1rem' }}>
              My work focuses on reliability and speed. I reduced API latency by 30% for <a href="https://www.directv.com/" target="_blank" rel="noopener noreferrer" className="company-link">DIRECTV</a>'s 10 million subscribers and automated supply chain workflows at <a href="https://www.nordstrom.com" target="_blank" rel="noopener noreferrer" className="company-link">Nordstrom</a> to cut manual processing time in half. I'm technology agnostic and driven by curiosity, constantly expanding my skillset to build the best possible solution for any complex problem.
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