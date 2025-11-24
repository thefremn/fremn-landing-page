"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type Props = {
  imageUrl?: string;
  name?: string;
  tagline?: string;
  missionBullets?: string[];
};

const bgStyle: CSSProperties = {
  backgroundImage: "url('/one-suite-banner.webp')",
};

const AboutUsSection: React.FC<Props> = ({
  imageUrl = "/fremn-logo.png",
  name = "FREMN",
  tagline = "Modern. Precise. Intelligent.",
  missionBullets = [
    "Innovative — Future-ready tools",
    "Intelligent — AI-powered systems that think, learn, and adapt.",
    "Integrated — A unified ecosystem where everything works together.",
  ],
}) => {
  // Hydration-safe mounting
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="about"
      className="relative bg-cover bg-center bg-no-repeat flex flex-col items-center text-white py-20 grid-overlay"
      style={bgStyle}
    >
      {/* Heading block */}
      <div className="mb-5 text-center">
        <h2 className="text-[72px] leading-tight font-['PlayfairDisplay'] tracking-tight text-slate-100">
          ABOUT <span className="ml-4">US</span>
        </h2>
        <div className="h-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent mt-4 w-full" />
      </div>

      {/* SSR FALLBACK (NO ANIMATIONS TO PREVENT HYDRATION MISMATCH) */}
      {!mounted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center opacity-0">
          {/* Left image placeholder */}
          <div className="lg:col-span-5">
            <div className="w-[50%] mx-auto aspect-[4/5] bg-white/10 rounded-xl" />
          </div>

          {/* Right text block placeholder */}
          <div className="lg:col-span-7">
            <div className="h-64 bg-white/5 rounded-xl" />
          </div>
        </div>
      ) : (
        /* CLIENT-ONLY ANIMATED VERSION */
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* LEFT SIDE — Liquid Glass Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card className="bg-white/6 backdrop-blur-md border border-white/6 shadow-2xl rounded-2xl overflow-hidden p-6 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-[60%] mx-auto aspect-[4/5]"
              >
                <Image
                  src={imageUrl}
                  alt={`${name} logo`}
                  fill
                  className="object-contain rounded-xl"
                  unoptimized
                />
              </motion.div>
            </Card>
          </motion.div>

          {/* RIGHT SIDE — TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-lg">
              <p className="text-sm text-slate-300 mb-4">{tagline}</p>

              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 leading-relaxed">
                <span className="text-amber-300">{name}</span> — Future Ready
                Enterprise Management Network — is a forward-thinking technology
                company dedicated to building intelligent, AI-powered systems
                for modern enterprises.
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                Our mission is simple:{" "}
                <strong>
                  innovate tomorrow through cutting-edge AI solutions.
                </strong>{" "}
                We’re building an AI Support Ecosystem centered on conversational
                intelligence, unified knowledge, and automated operations — and
                expanding into a complete suite of enterprise tools.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {missionBullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                    className="text-sm text-slate-300 flex items-start gap-3"
                  >
                    <span className="w-2 h-2 mt-2 rounded-full bg-amber-400/90" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutUsSection;
