"use client";
import React from "react";
import { useMemo, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const options = useMemo(() => {
    return {
      background: {
        // Instead of flat black, use gradient overlay
        color: "transparent",
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: true,
        },
      },
      particles: {
        color: { value: "#ffffff" },
        move: {
          enable: true,
          speed: 0.4,
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        number: {
          value: 100,
          density: { enable: true, area: 800 },
        },
        opacity: {
          value: { min: 0.3, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0  bg-gradient-to-b from-black via-[#0a0015] to-[#1a002e]  h-[70dvh] ">
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default ParticleBackground;
