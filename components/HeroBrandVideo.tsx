import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroBrandVideo() {
  return (
    <div className="mb-5 w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-[20rem]">
      <video
        className="h-auto w-full rounded-md object-contain"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={brand.logo}
        aria-label={`${brand.name} animated logo`}
      >
        <source src="/brand/jm-logo-hero-animated.mp4" type="video/mp4" />
      </video>
      <noscript>
        <Image src={brand.logo} alt={brand.name} width={1200} height={1200} className="h-auto w-full rounded-md object-contain" />
      </noscript>
    </div>
  );
}
