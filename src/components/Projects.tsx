import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import './Projects.css';

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
      title: "MindPulse",
      description: "AI mental health support system using Claude 3.5 Sonnet with RAG trained on 3,512+ counseling conversations. Features risk-based assessment, automatic provider SMS alerts, and emotional health discrepancy detection.",
      technologies: ["Python", "FastAPI", "Claude AI", "RAG", "TypeScript", "React", "Twilio"],
      githubUrl: "https://github.com/wasifsarwar/MindPulse",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Gocart",
      description: "A modern, scalable microservices-based e-commerce API built with Go, featuring comprehensive testing, CI/CD, and beautiful API documentation.",
      technologies: ["Go", "PostgreSQL", "Docker", "Typescript", "React", "Supabase", "GCP"],
      githubUrl: "https://github.com/wasifsarwar/gocart",
      liveUrl: "https://gocartshopping.netlify.app/"
    },
    {
      id: 3,
      title: "Rate Limiter",
      description: "High-performance rate limiter using sliding window log algorithm. Features fine-grained locking for concurrent scalability and Caffeine cache with automatic cleanup to prevent memory leaks in production environments.",
      technologies: ["Java", "Caffeine Cache", "Concurrency", "Algorithm Design"],
      githubUrl: "https://github.com/wasifsarwar/RateLimiter",
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
                {project.githubUrl && project.githubUrl !== '#' ? (
                  <img
                    src={`https://opengraph.githubassets.com/1${new URL(project.githubUrl).pathname}`}
                    alt={`${project.title} repository preview`}
                    className="github-preview"
                  />
                ) : (
                  <div className="project-placeholder">{project.title}</div>
                )}
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
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
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