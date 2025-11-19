import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactLink } from '../types';
import './Contact.css';

const Contact: React.FC = () => {
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

  const contactLinks: ContactLink[] = [
    {
      href: "mailto:wasif.sarwar9@gmail.com",
      icon: Mail,
      label: "wasif.sarwar9@gmail.com"
    },
    {
      href: "https://linkedin.com/in/wasifsiddique",
      icon: Linkedin,
      label: "LinkedIn Profile"
    },
    {
      href: "https://github.com/wasifsarwar",
      icon: Github,
      label: "GitHub Projects"
    }
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Let's Work Together</motion.h2>
        <motion.p variants={itemVariants} className="contact-description">
          Open to software engineering opportunities and interesting technical challenges. Let's build something scalable together.
        </motion.p>
        <motion.div className="contact-links" variants={containerVariants}>
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                className="contact-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <IconComponent size={20} />
                {link.label}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;