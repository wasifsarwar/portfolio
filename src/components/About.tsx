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
          <div className="about-text">
            <p>
              Software Engineer with 4.5 years of experience designing and scaling globally distributed systems and microservices
              for global tech organizations. Most recently worked at Axon (public safety technology leader) across Axon Justice
              and Axon Air divisions, building evidence processing platforms and drone streaming systems.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Previously contributed to high-impact projects at Nike (retail data pipelines processing 50M+ daily transactions),
              DIRECTV (media streaming infrastructure for 10M+ subscribers), and Nordstrom (supply chain automation).
              Graduated from University of Washington with a Bachelor of Science in Aeronautics & Astronautics
              (Concentration: Computer Science).
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