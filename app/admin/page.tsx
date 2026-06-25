"use client";

import Image from "next/image";
import { Lock, NotebookPen, Receipt, Star, Users, Wrench } from "lucide-react";
import { useState } from "react";
import { brand, dashboardData } from "@/lib/content";

const modules = [
  ["Customers", Users],
  ["Quotes", NotebookPen],
  ["Jobs", Wrench],
  ["Invoices", Receipt],
  ["Payments", Receipt],
  ["Reviews", Star],
  ["Photos", NotebookPen],
  ["Notes", NotebookPen],
  ["Status", Wrench],
  ["Completed Jobs", Wrench],
  ["Upcoming Jobs", Wrench]
] as const;

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return (
      <section className="container-px mx-auto grid min-h-[70vh] max-w-xl place-items-center py-16">
        <form className="w-full rounded-lg border border-white/10 bg-white/[.045] p-7 text-center" onSubmit={(event) => { event.preventDefault(); setUnlocked(true); }}>
          <Image src={brand.logo} alt="JM TV Mounting & Installation logo" width={110} height={110} className="mx-auto mb-5 h-24 w-24 rounded-full object-contain" />
          <Lock className="mx-auto mb-4 text-neon" />
          <h1 className="headline text-5xl">Admin Dashboard</h1>
          <p className="mt-3 text-sm leading-6 text-white/62">Secure dashboard interface for quotes, customers, jobs, invoices, payments, photos, reviews, notes, and statuses.</p>
          <input className="field mt-6 text-center" type="password" placeholder="Dashboard Password" />
          <button className="btn-primary mt-4 w-full" type="submit">Open Dashboard</button>
        </form>
      </section>
    );
  }

  return (
    <section className="container-px mx-auto max-w-7xl py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-extrabold uppercase text-neon">Operations</p>
          <h1 className="headline text-6xl">Admin Dashboard</h1>
        </div>
        <a href={brand.phoneHref} className="btn-secondary">{brand.phone}</a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardData.stats.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-black/35 p-5">
            <p className="text-sm font-bold text-white/55">{label}</p>
            <p className="mt-2 font-heading text-5xl text-neon">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {modules.map(([label, Icon]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[.045] p-5">
            <Icon className="mb-4 text-neon" />
            <h2 className="font-bold">{label}</h2>
            <p className="mt-2 text-xs leading-5 text-white/55">Track, update, filter, and attach records from one clean workspace.</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-black/35 p-5">
          <h2 className="mb-4 font-heading text-4xl">Upcoming Jobs</h2>
          <div className="grid gap-3">
            {dashboardData.jobs.map(([date, city, job, status]) => (
              <div key={`${date}${job}`} className="grid gap-2 rounded-lg border border-white/10 bg-white/[.04] p-4 sm:grid-cols-[90px_1fr_110px]">
                <span className="font-bold text-neon">{date}</span><span>{city} · {job}</span><span className="text-sm text-white/58">{status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/35 p-5">
          <h2 className="mb-4 font-heading text-4xl">Customer Pipeline</h2>
          <div className="grid gap-3">
            {dashboardData.customers.map(([name, city, note, value]) => (
              <div key={name} className="grid gap-2 rounded-lg border border-white/10 bg-white/[.04] p-4 sm:grid-cols-[110px_1fr_90px]">
                <span className="font-bold text-neon">{name}</span><span>{city} · {note}</span><span className="text-sm text-white/58">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
