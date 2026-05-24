"use client";
import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#2563eb] py-2.5 px-4 flex items-center justify-center gap-2 text-center">
      <span className="text-white/90 text-[13px] font-sans font-medium">
        Now live for dental clinics across India
      </span>
      <span className="text-white/60 hidden sm:inline text-[13px]">—</span>
      <Link
        href="#contact"
        className="text-white font-semibold text-[13px] underline underline-offset-2 hover:text-white/80 transition-colors"
      >
        Book Now!
      </Link>
    </div>
  );
}
