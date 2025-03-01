import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [hoverState, setHoverState] = useState({
    isHovered: false,
    mouseX: 0,
    mouseY: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top;  // y position within the card
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setHoverState({
      isHovered: true,
      mouseX: rotateY,
      mouseY: rotateX,
    });
  };

  const handleMouseLeave = () => {
    setHoverState({
      isHovered: false,
      mouseX: 0,
      mouseY: 0,
    });
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)"
      }}
      style={{
        transformStyle: 'preserve-3d',
        transform: hoverState.isHovered 
          ? `perspective(1000px) rotateX(${hoverState.mouseY}deg) rotateY(${hoverState.mouseX}deg)` 
          : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: hoverState.isHovered ? 'none' : 'transform 0.5s ease'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-48 md:h-60">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.image})`,
            transform: 'translateZ(20px)',
            transformStyle: 'preserve-3d'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
          >
            Live Demo
          </a>
          <a 
            href={project.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 font-medium hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI Image Generator",
      description: "A web application that uses AI to generate images based on text prompts using OpenAI's DALL-E API.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product catalog, cart, checkout, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["MERN Stack", "Redux", "Stripe", "JWT"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "A dashboard to monitor and control IoT devices for smart home automation.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "MQTT", "Chart.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with advanced animations and responsive design.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <div className="w-20 h-1 bg-purple-600 mb-8"></div>
      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
        Here are some of my recent projects. Each demonstrates my skills in different areas of web development.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;