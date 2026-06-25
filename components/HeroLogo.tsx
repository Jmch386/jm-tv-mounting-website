"use client";

import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroLogo() {
  return (
    <div className="mx-auto w-full max-w-[85%] sm:max-w-[24rem] lg:max-w-[28rem]">
      <Image src={brand.logo} alt="JM TV Mounting & Installation official logo" width={1200} height={1200} sizes="(max-width: 640px) 82vw, (max-width: 1024px) 384px, 448px" className="h-auto w-full rounded-md object-contain" priority />
    </div>
  );
}
