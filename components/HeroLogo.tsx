"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brand } from "@/lib/content";

export function HeroLogo() {
  return (
    <motion.div
      className="glass mx-auto w-full max-w-md rounded-lg p-5 shadow-premium"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .55, ease: "easeOut" }}
    >
      <Image src={brand.logo} alt="JM TV Mounting & Installation official logo" width={720} height={720} className="h-auto w-full rounded-lg object-contain" priority />
    </motion.div>
  );
}
