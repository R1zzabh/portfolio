import React from "react";
import { motion } from "framer-motion";

const LightModeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbc2eb] via-[#a6c1ee] to-[#fad0c4]"></div>

      {/* Floating Animated Blobs */}
      <motion.div
        className="absolute top-16 left-10 w-72 h-72 bg-white opacity-30 blur-3xl rounded-full"
        initial={{ scale: 1, y: -20 }}
        animate={{ scale: 1.3, y: 20 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 8, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-24 right-10 w-80 h-80 bg-[#FFDEE9] opacity-40 blur-3xl rounded-full"
        initial={{ scale: 1, y: 30 }}
        animate={{ scale: 1.2, y: -30 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 7, ease: "easeInOut" }}
      />

      {/* Wavy Glassmorphic Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-48 bg-white opacity-20 blur-xl rounded-t-full"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-full h-64 bg-white opacity-10 blur-2xl rounded-t-full"
        initial={{ y: 60 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default LightModeBackground;
