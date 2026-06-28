import Image from "next/image";
import { brand } from "@/lib/content";

export function HeaderLogo() {
  return (
    <Image
      src="/brand/header-logo-wide.png"
      alt={brand.name}
      width={995}
      height={285}
      sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 310px"
      className="h-12 w-auto max-w-[220px] rounded-md object-contain sm:h-14 sm:max-w-[260px] md:h-16 md:max-w-[310px]"
      priority
    />
  );
}
