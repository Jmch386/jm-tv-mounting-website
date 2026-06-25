"use client";

import { Upload } from "lucide-react";
import { useState } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-lg border border-neon/30 bg-neon/10 p-8 text-center">
        <h3 className="headline text-5xl text-neon">Thank you!</h3>
        <p className="mt-2 font-bold">We&apos;ll contact you shortly.</p>
      </div>
    );
  }

  return (
    <form id="quote" className="grid gap-4 rounded-lg border border-white/10 bg-white/[.045] p-5" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <div className="grid gap-4 md:grid-cols-3">
        {["Name", "Phone", "Email", "City"].map((field) => <input key={field} className="field" required placeholder={field} type={field === "Email" ? "email" : "text"} />)}
        <select className="field" required defaultValue=""><option value="" disabled>TV Size</option><option>Up to 55&quot;</option><option>65&quot;-75&quot;</option><option>85&quot;+</option></select>
        <select className="field" required defaultValue=""><option value="" disabled>Wall Type</option><option>Drywall</option><option>Concrete</option><option>Brick</option><option>Fireplace</option></select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {["Need Mount?", "Need Soundbar?", "Need Wire Concealment?", "Need In-Wall Kit?"].map((item) => <label key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold"><input type="checkbox" /> {item}</label>)}
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <input className="field" type="date" aria-label="Preferred Date" />
        <label className="field flex cursor-pointer items-center gap-3 text-white/70"><Upload size={18} /> Photo Upload<input type="file" accept="image/*" className="hidden" /></label>
      </div>
      <textarea className="field min-h-32" placeholder="Message" />
      <button className="btn-primary w-full md:w-auto" type="submit">Submit Quote Request</button>
    </form>
  );
}
