"use client";

import { useEffect, useState } from "react";

export default function ReadProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setWidth(Math.min(100, (window.scrollY / docHeight) * 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 64,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 49,
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: "linear-gradient(90deg, #1E6BFF, #5BC0EB)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}