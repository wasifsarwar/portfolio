import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Microservices Architecture Platform",
      description: "Designed and implemented a scalable microservices platform using Spring Boot and Docker, handling 10K+ concurrent users with 99.9% uptime.",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Real-time Data Processing Pipeline",
      description: "Built a high-throughput data processing system using Apache Kafka and Go, processing 1M+ events per day with sub-second latency.",
      technologies: ["Go", "Kafka", "Redis", "MongoDB", "AWS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "API Gateway & Authentication Service",
      description: "Developed a centralized API gateway with JWT-based authentication, rate limiting, and request routing for multiple backend services.",
      technologies: ["Node.js", "Express", "JWT", "Redis", "AWS Lambda"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Backend Projects</motion.h2>
        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="project-placeholder">Project {project.id}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <button className="project-link">
                      <Github size={16} />
                      Code
                    </button>
                  )}
                  {project.liveUrl && (
                    <button className="project-link">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;