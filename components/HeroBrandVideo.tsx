import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroBrandVideo() {
  return (
    <div className="mx-auto mb-5 w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[26rem] xl:max-w-[28rem]">
      <Image
        src="/brand/hero-left-logo-black.png"
        alt={brand.name}
        width={1280}
        height={1280}
        sizes="(max-width: 640px) 288px, (max-width: 1024px) 352px, 448px"
        className="h-auto w-full rounded-lg object-contain"
        priority
      />
    </div>
  );
}
