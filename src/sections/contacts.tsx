"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      e.target.reset();
      setSuccessModal(true);

      setTimeout(() => setSuccessModal(false), 3000);
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center px-6 py-16"
    >
      {/* Background Image */}
      <Image
        src="/fin-banner.webp"
        alt="Contact Background"
        fill
        className="object-cover"
        unoptimized
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="p-6 bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl">
          <h2 className="text-3xl font-semibold text-white mb-4 text-center">
            Get in Touch
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs text-white/80 mb-1">Name</label>
              <Input
                name="name"
                placeholder="Your full name"
                className="bg-white/70 h-10 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-white/80 mb-1">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="bg-white/70 h-10 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-white/80 mb-1">Message</label>
              <Textarea
                name="message"
                placeholder="How can we help you?"
                className="bg-white/70 min-h-[110px] text-sm"
                required
              />
            </div>

            <Button
              disabled={loading}
              className="
                w-full 
                bg-[oklch(70%_0.12_240)] 
                hover:bg-white 
                hover:text-[oklch(70%_0.12_240)] 
                border border-transparent 
                hover:border-[oklch(70%_0.12_240)]
                transition 
                text-white text-sm py-2
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </motion.div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {successModal && mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl p-6 text-center shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-white/70 mt-2 text-sm">
                We’ll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
