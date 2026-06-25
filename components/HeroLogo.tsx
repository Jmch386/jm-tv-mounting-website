"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brand } from "@/lib/content";

export function HeroLogo() {
  return (
    <motion.div
      className="glass mx-auto w-full max-w-[21.5rem] rounded-lg p-3 shadow-premium sm:max-w-sm sm:p-5 lg:max-w-[26rem] xl:max-w-[29rem]"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .55, ease: "easeOut" }}
    >
      <Image src={brand.logo} alt="JM TV Mounting & Installation official logo" width={1200} height={900} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 384px, 464px" className="h-auto w-full rounded-lg object-contain" priority />
    </motion.div>
  );
}
