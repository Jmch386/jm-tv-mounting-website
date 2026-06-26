"use client";

import { Upload } from "lucide-react";
import { type FormEvent, useState } from "react";

const quoteEndpoint = "https://formspree.io/f/xzdleeow";
const googleSheetEndpoint = "https://script.google.com/macros/s/AKfycbyyj6GPNCMT2XTQGHfGxRjoDnN7g3ryDXm_4B5sOp2IiwQytBdpRCSbynDJpbBvFLse/exec";

function getFormText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function buildGoogleSheetPayload(formData: FormData) {
  return {
    name: getFormText(formData, "name"),
    phone: getFormText(formData, "phone"),
    email: getFormText(formData, "email"),
    city: getFormText(formData, "city"),
    tvSize: getFormText(formData, "tv_size"),
    wallType: getFormText(formData, "wall_type"),
    needMount: getFormText(formData, "need_mount"),
    needSoundbar: getFormText(formData, "need_soundbar"),
    needWireConcealment: getFormText(formData, "need_wire_concealment"),
    needInWallKit: getFormText(formData, "need_in_wall_kit"),
    preferredDate: getFormText(formData, "preferred_date"),
    message: getFormText(formData, "message"),
    photoUrl: getFormText(formData, "photoUrl")
  };
}

async function sendGoogleSheetLead(payload: ReturnType<typeof buildGoogleSheetPayload>) {
  try {
    await fetch(googleSheetEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(payload)
    });
  } catch {
    // Keep the customer flow moving if the Google Sheet request fails.
  }
}

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [options, setOptions] = useState({
    needMount: false,
    needSoundbar: false,
    needWireConcealment: false,
    needInWallKit: false
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("need_mount", options.needMount ? "Yes" : "No");
    formData.set("need_soundbar", options.needSoundbar ? "Yes" : "No");
    formData.set("need_wire_concealment", options.needWireConcealment ? "Yes" : "No");
    formData.set("need_in_wall_kit", options.needInWallKit ? "Yes" : "No");
    const googleSheetPayload = buildGoogleSheetPayload(formData);
    const googleSheetRequest = sendGoogleSheetLead(googleSheetPayload);

    try {
      const response = await fetch(quoteEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Quote request failed");
      }

      void googleSheetRequest;
      form.reset();
      setOptions({
        needMount: false,
        needSoundbar: false,
        needWireConcealment: false,
        needInWallKit: false
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please call or text 561-663-3072.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-neon/30 bg-neon/10 p-8 text-center">
        <h3 className="headline text-5xl text-neon">Thank you!</h3>
        <p className="mt-2 font-bold">Your quote request has been sent. We&apos;ll call or text you shortly.</p>
      </div>
    );
  }

  return (
    <form data-hide-floating-call className="grid gap-3 rounded-lg border border-white/10 bg-white/[.045] p-4 pb-20 sm:p-5 md:gap-4 lg:pb-5" encType="multipart/form-data" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New JM TV Mounting quote request" />
      <div className="grid gap-3 md:gap-4 lg:grid-cols-3">
        <input className="field" name="name" required placeholder="Name" />
        <input className="field" name="phone" required placeholder="Phone" type="tel" />
        <input className="field" name="email" required placeholder="Email" type="email" />
        <input className="field" name="city" required placeholder="City" />
        <select className="field" name="tv_size" required defaultValue=""><option value="" disabled>TV Size</option><option>Up to 55&quot;</option><option>65&quot;-75&quot;</option><option>85&quot;+</option></select>
        <select className="field" name="wall_type" required defaultValue=""><option value="" disabled>Wall Type</option><option>Drywall</option><option>Concrete</option><option>Brick</option><option>Fireplace</option></select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3 text-sm font-bold"><input type="checkbox" className="h-4 w-4 shrink-0 accent-neon" checked={options.needMount} onChange={(event) => setOptions((current) => ({ ...current, needMount: event.target.checked }))} /> Need Mount?</label>
        <label className="flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3 text-sm font-bold"><input type="checkbox" className="h-4 w-4 shrink-0 accent-neon" checked={options.needSoundbar} onChange={(event) => setOptions((current) => ({ ...current, needSoundbar: event.target.checked }))} /> Need Soundbar?</label>
        <label className="flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3 text-sm font-bold"><input type="checkbox" className="h-4 w-4 shrink-0 accent-neon" checked={options.needWireConcealment} onChange={(event) => setOptions((current) => ({ ...current, needWireConcealment: event.target.checked }))} /> Need Wire Concealment?</label>
        <label className="flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3 text-sm font-bold"><input type="checkbox" className="h-4 w-4 shrink-0 accent-neon" checked={options.needInWallKit} onChange={(event) => setOptions((current) => ({ ...current, needInWallKit: event.target.checked }))} /> Need In-Wall Kit?</label>
      </div>
      <div className="grid gap-3 md:gap-4 lg:grid-cols-[1fr_1fr]">
        <input className="field" name="preferred_date" type="text" placeholder="MM/DD/YYYY" inputMode="numeric" pattern="[0-9/]*" aria-label="Preferred Date" />
        <label className="field flex cursor-pointer items-center gap-3 text-white/70"><Upload size={18} className="shrink-0" /> Photo Upload<input type="file" name="photo_upload" accept="image/*" className="hidden" /></label>
      </div>
      <textarea className="field min-h-32" name="message" placeholder="Message" />
      {error && <p className="rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-sm font-bold text-red-200">{error}</p>}
      <button className="btn-primary w-full lg:w-auto" type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit Quote Request"}</button>
    </form>
  );
}
