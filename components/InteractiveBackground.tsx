"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth trailing effect
  const springConfig = { damping: 28, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    // Initial center position
    mouseX.set(window.innerWidth / 2 - 250);
    mouseY.set(window.innerHeight / 2 - 250);

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the element's size (250px) to center it on the cursor
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-white" />;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-white">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[110px] opacity-40 mix-blend-multiply"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(147,197,253,0.8) 0%, rgba(167,139,250,0.6) 40%, rgba(110,231,183,0.4) 100%)",
        }}
      />
    </div>
  );
}
