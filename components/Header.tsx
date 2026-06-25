"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageSquare, Phone, X } from "lucide-react";
import { useState } from "react";
import { brand, navItems } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="JM TV Mounting home">
          <Image src={brand.logo} alt="JM TV Mounting & Installation logo" width={220} height={165} className="h-12 w-28 rounded-md object-contain sm:w-36" priority />
          <span className="hidden text-sm font-extrabold uppercase leading-tight tracking-wide sm:block">
            JM TV Mounting<br /><span className="text-neon">& Installation</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-white/80 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neon">
              {item.label}
            </Link>
          ))}
          <Link href="/admin" className="hover:text-neon">Admin</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={brand.phoneHref} className="btn-secondary">
            <Phone size={18} />
            Call Now
          </a>
          <a href={brand.textHref} className="btn-primary">
            <MessageSquare size={18} />
            Text Us
          </a>
        </div>

        <button className="btn-ghost px-3 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="container-px border-t border-white/10 pb-5 lg:hidden">
          <nav className="grid gap-2 py-4 text-sm font-bold">
            {[...navItems, { label: "Admin", href: "/admin" }].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 hover:bg-white/8" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={brand.phoneHref} className="btn-primary w-full">
            <Phone size={18} />
            Call Now
          </a>
          <a href={brand.textHref} className="btn-secondary w-full">
            <MessageSquare size={18} />
            Text Us
          </a>
        </div>
      )}
    </header>
  );
}
