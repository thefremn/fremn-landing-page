"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div className="rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
        {/* Border + gradient pattern layer */}
        <CardPattern />

        {/* Custom image */}
        <div className="relative z-10 w-[80%] h-[80%] rounded-2xl overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt="Card Image"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export function CardPattern() {
  return (
    <div className="pointer-events-none">
      {/* Soft gradient mask */}
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] opacity-70"></div>

      {/* Colored gradient layer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-30 backdrop-blur-xl" />
    </div>
  );
}
