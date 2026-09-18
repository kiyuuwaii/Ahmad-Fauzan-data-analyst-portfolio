"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth trailing effect
  const springConfig = { damping: 28, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    // Check if the device has a fine pointer (like a mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsPointerDevice(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    // If it's a pointer device, setup mouse tracking
    let handleMouseMove: (e: MouseEvent) => void;
    if (mediaQuery.matches) {
      mouseX.set(window.innerWidth / 2 - 250);
      mouseY.set(window.innerHeight / 2 - 250);

      handleMouseMove = (e: MouseEvent) => {
        // Offset by half the element's size (250px) to center it on the cursor
        mouseX.set(e.clientX - 250);
        mouseY.set(e.clientY - 250);
      };

      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-white" />;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-white">
      {/* Static ambient background (Always visible, clean soft pastel accents) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px] mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-100/40 blur-[120px] mix-blend-multiply" />

      {/* Interactive cursor glow (Hidden on mobile/touch screens) */}
      {isPointerDevice && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[110px] opacity-40 mix-blend-multiply"
          style={{
            x: smoothX,
            y: smoothY,
            background: "radial-gradient(circle, rgba(147,197,253,0.8) 0%, rgba(167,139,250,0.6) 40%, rgba(110,231,183,0.4) 100%)",
          }}
        />
      )}
    </div>
  );
}
