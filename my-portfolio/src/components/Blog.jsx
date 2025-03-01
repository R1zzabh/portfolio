import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-60 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ 
            backgroundImage: `url(${post.image})`,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="px-2 py-1 text-xs font-medium bg-purple-600 text-white rounded">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
        <h3 className="text-xl font-bold mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-2">
              {post.authorInitials}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
          </div>
          <motion.a 
            href={post.link} 
            className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center"
            whileHover={{ x: 5 }}
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Responsive Websites with Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive websites quickly using Tailwind CSS utility classes and best practices.",
      image: "/api/placeholder/600/400",
      category: "Web Development",
      date: "February 25, 2025",
      author: "Rishabh",
      authorInitials: "R",
      link: "#"
    },
    {
      title: "Getting Started with the MERN Stack",
      excerpt: "A comprehensive guide to building full-stack applications using MongoDB, Express, React, and Node.js.",
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      date: "February 10, 2025",
      author: "Rishabh",
      authorInitials: "R",
      link: "#"
    },
    {
      title: "AI in Web Development: Current Trends",
      excerpt: "Exploring how artificial intelligence is revolutionizing web development practices and creating new opportunities.",
      image: "/api/placeholder/600/400",
      category: "AI",
      date: "January 28, 2025",
      author: "Rishabh",
      authorInitials: "R",
      link: "#"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Blog</h2>
      <div className="w-20 h-1 bg-purple-600 mb-8"></div>
      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
        I share my knowledge and experiences in web development, AI, and technology through my blog.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <motion.a
          href="#"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-medium"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(124, 58, 237, 0.5)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          View All Posts
        </motion.a>
      </div>
    </div>
  );
};

export default Blog;