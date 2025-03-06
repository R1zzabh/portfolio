import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 mx-auto bg-indigo-600 rounded"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">Connect With Me</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-600 text-2xl mr-4" />
                <a href="mailto:rishabh@example.com" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">rishabh@example.com</a>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="https://github.com/R1zzabh" target="_blank" rel="noopener noreferrer" 
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/-rishabh-mishra-/" target="_blank" rel="noopener noreferrer" 
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/rishabh_0208_/" target="_blank" rel="noopener noreferrer" 
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">Send Me a Message</h3>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 dark:text-green-400 text-center py-8"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300 relative overflow-hidden group"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 transition-transform duration-500 ease-out group-hover:skew-x-12"></span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;