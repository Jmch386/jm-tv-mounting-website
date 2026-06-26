import Image from "next/image";
import { brand } from "@/lib/content";

export function HeroBrandVideo() {
  return (
    <div className="mx-auto mb-6 w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[30rem]">
      <Image
        src="/brand/hero-left-logo-transparent.png"
        alt={brand.name}
        width={1000}
        height={1000}
        sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 480px"
        className="h-auto w-full rounded-md object-contain"
        priority
      />
    </div>
  );
}
