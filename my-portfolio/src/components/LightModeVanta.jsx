import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const LightModeVanta = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (!window.VANTA) {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.cellular.min.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          setVantaEffect(
            window.VANTA.CELLULAR({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color1: "#f7d9e3",
              color2: "#b3e5fc",
              backgroundColor: "#ffffff",
              size: 2.5,
            })
          );
        };
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 -z-10"></div>;
};

export default LightModeVanta;
