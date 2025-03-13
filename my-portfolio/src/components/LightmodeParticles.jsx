import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const LightModeParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ["#111111", "#222222", "#333333"] }, // Darker shades for blackish glow
          shape: { type: "circle" },
          opacity: { value: 0.7, random: false, anim: { enable: false } },
          size: { value: 4, random: true, anim: { enable: false } },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          shadow: {
            enable: true,
            color: "#000000", // Black glow
            blur: 15,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default LightModeParticles;
