"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { gallery, galleryCategories } from "@/lib/content";

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);
  const [category, setCategory] = useState("All");
  const visibleGallery = category === "All" ? gallery : gallery.filter((item) => item.category === category);

  return (
    <>
      <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
        {["All", ...galleryCategories].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-extrabold transition ${category === item ? "border-neon bg-neon text-ink" : "border-white/10 bg-white/[.045] text-white hover:border-neon/60"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleGallery.map((item) => (
          <button key={`${item.category}-${item.title}`} onClick={() => setActive(item)} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[.045] text-left shadow-premium transition hover:-translate-y-1 hover:border-neon/45">
            <div className="relative aspect-[4/5] w-full bg-black">
              <Image
                src={item.thumb}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-extrabold uppercase text-neon">{item.category}</p>
              <h2 className="mt-2 font-bold">{item.title}</h2>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true">
          <button className="absolute right-4 top-4 btn-ghost px-3" onClick={() => setActive(null)} aria-label="Close image"><X /></button>
          <div className="max-w-5xl overflow-hidden rounded-lg border border-white/15 bg-ink">
            <Image src={active.image} alt={active.title} width={1500} height={2600} className="h-auto max-h-[78vh] w-full object-contain" />
            <div className="p-5">
              <p className="text-sm font-extrabold text-neon">{active.category}</p>
              <p className="mt-1 font-bold">{active.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
