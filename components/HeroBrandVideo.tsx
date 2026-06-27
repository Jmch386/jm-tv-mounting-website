import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroBrandVideo() {
  return (
    <div className="mx-auto mb-5 w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-[24rem] xl:max-w-[26rem]">
      <Image
        src="/brand/hero-left-logo-transparent.png"
        alt={brand.name}
        width={1000}
        height={1000}
          sizes="(max-width: 640px) 272px, (max-width: 1024px) 320px, 416px"
        className="h-auto w-full rounded-md object-contain"
        priority
      />
    </div>
  );
}
