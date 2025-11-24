"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ExpandableCardDemo = dynamic(
  () => import("../components/expandable-card-demo-grid"),
  { ssr: false }
);

export default function ProductSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="products"
      className="w-full px-6 py-20 bg-gradient-to-b from-[#f7f4ff] to-[#e7faff] rounded-2xl"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-[60px] font-semibold tracking-tight text-slate-800">
          Our Products
        </h2>

        <p className="text-slate-500 mt-2 text-lg">
          Powerful AI-driven tools crafted for modern support teams —
          accurate, automated, and seamlessly connected.
        </p>

        <div className="w-40 h-1 mx-auto bg-slate-300 mt-4 rounded-full" />
      </motion.div>

      {/* Grid */}
      <ExpandableCardDemo />
    </section>
  );
}

