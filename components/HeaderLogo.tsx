"use client";

import Image from "next/image";
import { brand } from "@/lib/content";

export function HeaderLogo() {
  return (
    <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-black sm:h-8 sm:w-8">
      <Image src="/brand/icon-only.png" alt="" width={220} height={220} className="h-full w-full object-contain" priority />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/brand/icon-only.png"
        aria-label={`${brand.name} animated logo`}
      >
        <source src="/brand/jm-logo-hero-animated.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
