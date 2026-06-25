"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(54);

  return (
    <div className="rounded-lg border border-white/10 bg-black/40 p-3 shadow-premium">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-black sm:aspect-[16/10]">
        <Image
          src="/gallery/bedroom-wire-concealment.webp"
          alt="Before wire concealment TV installation"
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="relative h-full" style={{ width: `${10000 / position}%` }}>
            <Image
              src="/gallery/living-room-install.webp"
              alt="After clean finished TV installation"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
        <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="h-full w-1 -translate-x-1/2 bg-neon shadow-glow" />
        </div>
        <div className="absolute left-4 top-4 rounded-md bg-black/75 px-3 py-2 text-xs font-extrabold uppercase text-neon">After</div>
        <div className="absolute right-4 top-4 rounded-md bg-black/75 px-3 py-2 text-xs font-extrabold uppercase text-white">Before</div>
      </div>
      <label className="mt-4 block text-sm font-bold text-white/70">
        Compare finish
        <input
          className="mt-3 h-2 w-full accent-neon"
          type="range"
          min="20"
          max="80"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Before and after image comparison"
        />
      </label>
    </div>
  );
}
