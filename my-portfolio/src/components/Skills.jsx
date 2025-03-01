import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" 
      }}
    >
      <div className="mb-3 text-3xl">{skill.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div 
          className="bg-purple-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    {
      name: "HTML/CSS",
      icon: "🎨",
      proficiency: 95,
      description: "Advanced knowledge of semantic HTML and modern CSS techniques."
    },
    {
      name: "JavaScript",
      icon: "📝",
      proficiency: 90,
      description: "Strong proficiency in ES6+ features and DOM manipulation."
    },
    {
      name: "React",
      icon: "⚛️",
      proficiency: 85,
      description: "Experience with hooks, context API, and state management."
    },
    {
      name: "TypeScript",
      icon: "📘",
      proficiency: 75,
      description: "Type-safe code development with interfaces and generics."
    },
    {
      name: "Tailwind CSS",
      icon: "🌬️",
      proficiency: 90,
      description: "Utility-first CSS for rapid UI development."
    },
    {
      name: "Vite",
      icon: "⚡",
      proficiency: 80,
      description: "Modern build tool for lightning-fast development."
    }
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: "🟢",
      proficiency: 70,
      description: "Server-side JavaScript for building scalable applications."
    },
    {
      name: "Express",
      icon: "🚂",
      proficiency: 65,
      description: "Web framework for building APIs and server applications."
    },
    {
      name: "MongoDB",
      icon: "🍃",
      proficiency: 60,
      description: "NoSQL database for flexible data storage solutions."
    },
    {
      name: "Bun",
      icon: "🥖",
      proficiency: 50,
      description: "All-in-one JavaScript runtime for faster development."
    }
  ];

  const otherSkills = [
    {
      name: "Git & GitHub",
      icon: "📊",
      proficiency: 85,
      description: "Version control and collaborative development."
    },
    {
      name: "AI & Robotics",
      icon: "🤖",
      proficiency: 70,
      description: "Academic knowledge in AI algorithms and robotic systems."
    },
    {
      name: "UI/UX Design",
      icon: "🎯",
      proficiency: 65,
      description: "Creating intuitive and visually appealing interfaces."
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Skills</h2>
      <div className="w-20 h-1 bg-purple-600 mb-8"></div>
      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
        My technical skills span across different areas of web development, AI, and robotics.
      </p>
      
      <SkillCategory title="Frontend Development" skills={frontendSkills} />
      <SkillCategory title="Backend Development" skills={backendSkills} />
      <SkillCategory title="Other Skills" skills={otherSkills} />
    </div>
  );
};

export default Skills;