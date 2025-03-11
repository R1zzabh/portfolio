import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { motion } from "framer-motion";

function App() {
  // Check localStorage for theme, otherwise use system preference
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  return (
    <div
  className={`min-h-screen transition-all duration-1000 ease-in-out ${
    darkMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
  }`}
>

      <ParticleBackground />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <section id="home" className="py-20">
          <Hero />
        </section>

        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Projects />
          </motion.div>
        </section>

        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Skills />
          </motion.div>
        </section>

        <section id="experience" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Experience />
          </motion.div>
        </section>

        <section id="blog" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Blog />
          </motion.div>
        </section>

        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-800 dark:bg-black text-white py-6 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Rishabh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
