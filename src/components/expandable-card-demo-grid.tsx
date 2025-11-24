"use client";

import React, { useEffect, useId, useRef, useState } from "react";

const cards = [
  {
    description: "AI Support OS",
    title: "Solvia",
    src: "/p1.png",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => (
      <p>Solvia is the core of the FREMN ecosystem — a powerful AI support platform
built for modern businesses.
With intelligent chat, voice support, WhatsApp integration, and smart agent
handoff, Solvia delivers instant, reliable, and deeply contextual customer
support.
</p>
    ),
  },
  {
    description: "AI Knowledge Hub",
    title: "Lexica",
    src: "/p2.png",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => (
      <p>Lexica centralizes documents, FAQs, and SOPs into a single intelligent knowledge engine that powers accurate AI responses and consistent support.</p>
    ),
  },
  {
    description: "Support Automation Engine",
    title: "Fluxor",
    src: "/p3.png",
    ctaText: "Learn More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => <p>Fluxor automates backend tasks, triggers, workflows, routing, and operational logic — reducing manual workload and accelerating support performance.
</p>,
  },
];

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Handle escape key and scroll lock
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(null);
      }
    }

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <div className="p-8">
      {/* Overlay */}
      {active && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10" />
      )}

      {/* Expanded Modal */}
      {active && (
        <div className="fixed inset-0 z-[100] grid place-items-center px-4">
          {/* Close Button */}
          <button
            className="flex absolute top-4 right-4 lg:hidden items-center justify-center 
            bg-white/20 backdrop-blur-xl rounded-full h-9 w-9 border border-white/30"
            onClick={() => setActive(null)}
          >
            <CloseIcon />
          </button>

          {/* Card */}
          <div
            ref={ref}
            className="w-full max-w-[520px] max-h-[90%] 
            flex flex-col bg-white/30 dark:bg-white/15 
            backdrop-blur-2xl border border-white/40 
            rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          >
            {/* Image */}
            <div>
              <img
                src={active.src}
                className="w-full h-80 object-cover object-top"
                alt={active.title}
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex justify-between items-start p-5">
                <div>
                  <h3 className="font-semibold text-foreground text-xl">
                    {active.title}
                  </h3>
                  <p className="text-foreground/70 mt-1">
                    {active.description}
                  </p>
                </div>

                <a
                  href={active.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-bold 
                  bg-[oklch(70%_0.12_240)] text-white shadow-lg hover:bg-[oklch(65%_0.12_240)] transition-colors"
                >
                  {active.ctaText}
                </a>
              </div>

              {/* Scrollable content */}
              <div className="px-5 pb-8">
                <div
                  className="text-foreground text-sm max-h-48 overflow-auto 
                  [mask:linear-gradient(to_bottom,white_85%,white_90%,transparent)] flex flex-col gap-4 
                  scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col gap-4 cursor-pointer 
            rounded-2xl border border-white/10 
            bg-white/5 backdrop-blur-xl 
            hover:scale-[1.03] hover:bg-white/10 
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            transition-all duration-300 shadow-lg"
          >
            <div>
              <img
                src={card.src}
                className="h-52 w-full rounded-xl object-cover object-top"
                alt={card.title}
              />
            </div>

            <div className="flex flex-col text-center">
              <h3 className="font-semibold text-foreground text-lg">
                {card.title}
              </h3>
              <p className="text-foreground/90 text-sm font-medium">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-foreground"
  >
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);