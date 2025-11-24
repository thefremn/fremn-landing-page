"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-0 text-white overflow-hidden">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/footer-background.webp')" }}
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-16"
      >

        {/* Short Description */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-semibold mb-3">
            FREMN — Future Ready Enterprise Management Network
          </h3>
          <p className="text-white/70 max-w-3xl mx-auto">
            Building intelligent AI solutions for modern business operations.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 text-lg font-medium mb-12"
        >
          <a href="#home" className="hover:text-[oklch(70%_0.12_240)] transition">Home</a>
          <a href="#about" className="hover:text-[oklch(70%_0.12_240)] transition">About</a>
          <a href="#products" className="hover:text-[oklch(70%_0.12_240)] transition">Products</a>
          <a href="#contact" className="hover:text-[oklch(70%_0.12_240)] transition">Contact</a>
          <a href="#contact" className="hover:text-[oklch(70%_0.12_240)] transition">Join Waitlist</a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full border-t border-white/20 my-6"
        />

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center text-white/50 text-sm"
        >
          © 2025 FREMN. All rights reserved
        </motion.p>

      </motion.div>
    </footer>
  );
}
