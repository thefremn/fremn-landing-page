"use client";

import { CSSProperties, useEffect, useState } from "react";
import { motion } from "framer-motion";

const heroStyle: CSSProperties = {
  backgroundImage: "url('/hero-bg.jpeg')",
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch by rendering motion only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="hero">
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center text-white pt-24 pb-20 grid-overlay"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {!mounted ? (
          // INITIAL NON-ANIMATED FALLBACK (SSR SAFE)
          <div className="relative z-10 text-center max-w-4xl px-4 opacity-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">FREMN</h1>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Future Ready Enterprise Management Network
            </h2>
          </div>
        ) : (
          // CLIENT-ONLY MOTION VERSION (NO HYDRATION MISMATCH)
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 text-center max-w-4xl px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              FREMN
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-2xl md:text-4xl font-bold leading-tight"
            >
              Future Ready Enterprise Management Network
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-5 text-lg md:text-l opacity-80"
            >
              Innovating tomorrow through cutting-edge AI solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.7, type: "spring" }}
              className="flex justify-center items-center w-full pt-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="
                  w-60 block text-center
                  px-6 py-5 rounded-2xl font-semibold text-xl
                  bg-[oklch(70%_0.12_240)] text-white
                  transition-all duration-300 shadow-xl border border-transparent

                  hover:bg-white
                  hover:text-[oklch(70%_0.12_240)]
                  hover:border-[oklch(70%_0.12_240)]
                "
              >
                Join the Waitlist
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
