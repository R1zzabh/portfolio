import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ experience, index, isLast }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <motion.div 
          className="w-3 h-3 bg-purple-600 rounded-full mt-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        />
        {!isLast && (
          <motion.div 
            className="w-0.5 h-full bg-purple-600"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            viewport={{ once: true }}
          />
        )}
      </div>
      <motion.div 
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 w-full"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" 
        }}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{experience.role}</h3>
            <p className="text-purple-600 dark:text-purple-400 font-medium">{experience.company}</p>
          </div>
          <div className="mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block">
            {experience.duration}
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
        {experience.achievements && (
          <div>
            <h4 className="font-medium mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        {experience.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Spectov",
      duration: "Dec 2024 - Present",
      description: "Working on building scalable web applications and learning industry best practices in a team environment.",
      achievements: [
        "Contributed to the development of a customer-facing dashboard",
        "Implemented responsive design patterns using Tailwind CSS",
        "Optimized application performance leading to 30% faster load times"
      ],
      technologies: ["React", "Tailwind CSS", "MERN Stack", "Git"]
    },
    {
      role: "Open Source Contributor",
      company: "GDG VIT Open Source",
      duration: "Sep 2024 - Present",
      description: "Actively contributing to open-source projects and collaborating with other developers to build innovative solutions.",
      achievements: [
        "Contributed to 5+ open-source projects",
        "Helped organize coding workshops for beginners",
        "Mentored junior contributors on Git workflow and best practices"
      ],
      technologies: ["JavaScript", "React", "Node.js", "Git"]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      duration: "Jun 2024 - Aug 2024",
      description: "Designed and developed custom websites for small businesses and startups.",
      achievements: [
        "Delivered 3 complete websites within tight deadlines",
        "Maintained 100% client satisfaction rate",
        "Implemented SEO best practices improving client visibility"
      ],
      technologies: ["HTML/CSS", "JavaScript", "React", "Responsive Design"]
    },
    {
      role: "AI Research Assistant",
      company: "University Research Lab",
      duration: "Jan 2024 - May 2024",
      description: "Assisted senior researchers in implementing and testing machine learning algorithms for robotics applications.",
      achievements: [
        "Helped develop a computer vision system for object recognition",
        "Contributed to a research paper on robotic movement optimization",
        "Created visualization tools for data analysis"
      ],
      technologies: ["Python", "TensorFlow", "Computer Vision", "Data Analysis"]
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Experience</h2>
      <div className="w-20 h-1 bg-purple-600 mb-8"></div>
      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
        My professional journey in web development, open source contributions, and academic research.
      </p>
      
      <div className="mt-8">
        {experiences.map((experience, index) => (
          <ExperienceItem 
            key={index} 
            experience={experience} 
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;