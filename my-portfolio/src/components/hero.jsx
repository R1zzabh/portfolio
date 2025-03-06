import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative inline-block">
        {text}
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="absolute top-0 left-0 text-blue-500 animate-glitch-1">{text}</span>
          <span className="absolute top-0 left-0 text-red-500 animate-glitch-2">{text}</span>
        </span>
      </span>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 overflow-hidden">
      <motion.div 
        className="md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm{' '}
          <GlitchText 
            text="Rishabh" 
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          />
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          AI & Robotics Student & Web Developer
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-lg">
          Second-year BRS student specializing in AI and Robotics with a passion for web development. 
          Currently diving into the MERN stack and working as an intern at Spectov.
        </p>
        <div className="flex space-x-4">
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(124, 58, 237, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ 
                behavior: 'smooth'
              });
            }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(124, 58, 237, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ 
                behavior: 'smooth'
              });
            }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 flex justify-center relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <motion.div 
            className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
