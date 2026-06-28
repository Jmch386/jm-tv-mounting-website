import Image from "next/image";
import { brand } from "@/lib/content";

export function HeaderLogo() {
  return (
    <Image
      src="/brand/header-words-logo.png"
      alt={brand.name}
      width={1035}
      height={325}
      sizes="(max-width: 640px) 190px, 260px"
      className="h-10 w-auto rounded-md object-contain sm:h-12 md:h-14"
      priority
    />
  );
}
