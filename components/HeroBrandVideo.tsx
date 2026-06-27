import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroBrandVideo() {
  return (
    <div className="mx-auto mb-6 w-full max-w-[15rem] sm:max-w-[18rem] md:mx-0 lg:max-w-[22rem] xl:max-w-[24rem]">
      <Image
        src="/brand/hero-left-logo-black.png"
        alt={brand.name}
        width={1126}
        height={989}
        sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 384px"
        className="h-auto w-full rounded-lg object-contain"
        priority
      />
    </div>
  );
}
