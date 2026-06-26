"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CallNowButton } from "@/components/CallNowButton";
import { HeaderLogo } from "@/components/HeaderLogo";
import { TextUsButton } from "@/components/TextUsButton";
import { navItems } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 md:h-20 md:gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="JM TV Mounting home">
          <HeaderLogo />
          <span className="text-base font-extrabold uppercase leading-tight tracking-wide text-white sm:text-lg">
            JM TV Mounting<br /><span className="text-neon">& Installation</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-white/80 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neon">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CallNowButton className="btn-secondary" />
          <TextUsButton className="btn-primary" />
        </div>

        <button className="btn-ghost px-3 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="container-px border-t border-white/10 pb-5 lg:hidden">
          <nav className="grid gap-2 py-4 text-sm font-bold">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 hover:bg-white/8" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-3">
            <CallNowButton className="btn-primary w-full" />
            <TextUsButton className="btn-secondary w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
