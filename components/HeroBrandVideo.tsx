import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroBrandVideo() {
  return (
    <div className="mx-auto mb-9 w-full max-w-[12.5rem] sm:max-w-[15rem] md:mx-0 lg:max-w-[18rem] xl:max-w-[20rem]">
      <Image
        src="/brand/hero-tv-mount-only.png"
        alt={`${brand.name} TV mount icon`}
        width={1254}
        height={1254}
        sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 320px"
        className="h-auto w-full rounded-lg object-contain"
        priority
      />
    </div>
  );
}
