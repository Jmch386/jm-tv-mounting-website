"use client";

import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroLogo() {
  return (
    <div className="mx-auto w-full max-w-[85%] sm:max-w-[24rem] lg:max-w-[28rem]">
      <video
        className="h-auto w-full rounded-md object-contain"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={brand.logo}
        aria-label="JM TV Mounting & Installation animated logo"
      >
        <source src="/brand/jm-logo-hero-animated.mp4" type="video/mp4" />
      </video>
      <noscript>
        <Image src={brand.logo} alt="JM TV Mounting & Installation official logo" width={1200} height={1200} sizes="(max-width: 640px) 82vw, (max-width: 1024px) 384px, 448px" className="h-auto w-full rounded-md object-contain" priority />
      </noscript>
    </div>
  );
}
