"use client";

import { CalendarCheck } from "lucide-react";
import { useState } from "react";

export function BookingForm() {
  const [requested, setRequested] = useState(false);

  return (
    <div className="rounded-lg border border-white/10 bg-black/35 p-5">
      <div className="mb-5 flex items-center gap-3">
        <CalendarCheck className="text-neon" />
        <h3 className="font-heading text-4xl">Online Booking</h3>
      </div>
      {requested ? (
        <p className="rounded-lg bg-neon/10 p-4 font-bold text-neon">Appointment request received. Confirmation email and text reminder placeholders are ready for integration.</p>
      ) : (
        <form className="grid gap-4 md:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setRequested(true); }}>
          <input className="field" placeholder="Name" required />
          <input className="field" placeholder="Phone" required />
          <input className="field" type="date" required />
          <select className="field" defaultValue="Morning"><option>Morning</option><option>Afternoon</option><option>Evening</option></select>
          <textarea className="field md:col-span-2" placeholder="Install details" />
          <button className="btn-secondary md:col-span-2" type="submit">Request Appointment</button>
        </form>
      )}
    </div>
  );
}
