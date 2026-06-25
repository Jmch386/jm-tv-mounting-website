"use client";

import { CalendarCheck, Upload } from "lucide-react";
import { type FormEvent, useState } from "react";

const bookingEndpoint = "https://formspree.io/f/mzdlepyd";

export function BookingForm() {
  const [requested, setRequested] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("send_to", "jmch386@gmail.com");

    try {
      const response = await fetch(bookingEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Booking request failed");
      }

      form.reset();
      setRequested(true);
    } catch {
      setError("Sorry, your appointment request could not be sent. Please call or text 561-663-3072.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div data-hide-floating-call className="rounded-lg border border-white/10 bg-black/35 p-4 pb-24 sm:p-5 lg:pb-5">
      <div className="mb-4 flex items-center gap-3 md:mb-5">
        <CalendarCheck className="text-neon" />
        <h3 className="font-heading text-4xl">Online Booking</h3>
      </div>
      {requested ? (
        <p className="rounded-lg bg-neon/10 p-4 font-bold text-neon">
          Thanks! Your appointment request was sent. JM TV Mounting will call or text you shortly.
        </p>
      ) : (
        <form
          className="grid gap-3 md:gap-4 lg:grid-cols-2"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New JM TV Mounting appointment request" />
          <input type="hidden" name="recipient_email" value="jmch386@gmail.com" />

          <input className="field" name="customer_name" placeholder="Customer name" required />
          <input className="field" name="phone_number" placeholder="Phone number" required type="tel" />
          <input className="field" name="email" placeholder="Email" required type="email" />
          <input className="field" name="city" placeholder="City" required />

          <select className="field" name="tv_size" required defaultValue="">
            <option value="" disabled>TV size</option>
            <option>Up to 55&quot;</option>
            <option>65&quot;-75&quot;</option>
            <option>85&quot;+</option>
          </select>
          <select className="field" name="service_requested" required defaultValue="">
            <option value="" disabled>Service requested</option>
            <option>TV Mounting</option>
            <option>Wire Concealment</option>
            <option>In-Wall Wire Concealment</option>
            <option>Soundbar Installation</option>
            <option>Home Theater Setup</option>
            <option>TV Setup</option>
          </select>

          <select className="field" name="wire_concealment_needed" required defaultValue="">
            <option value="" disabled>Wire concealment needed?</option>
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
          <select className="field" name="soundbar_needed" required defaultValue="">
            <option value="" disabled>Soundbar needed?</option>
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>

          <input className="field" name="preferred_date" required type="text" placeholder="MM/DD/YYYY" inputMode="numeric" pattern="[0-9/]*" aria-label="Preferred date" />
          <select className="field" name="preferred_time" required defaultValue="">
            <option value="" disabled>Preferred time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>First available</option>
          </select>

          <textarea className="field min-h-28 lg:col-span-2" name="message" placeholder="Message or install details" />
          <label className="field flex cursor-pointer items-center gap-3 text-white/70 lg:col-span-2">
            <Upload size={18} className="shrink-0" />
            Photos if included
            <input type="file" name="attachment" accept="image/*" multiple className="hidden" />
          </label>

          {error && (
            <p className="rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-sm font-bold text-red-200 lg:col-span-2">
              {error}
            </p>
          )}

          <button className="btn-secondary lg:col-span-2" type="submit" disabled={submitting}>
            {submitting ? "Sending request..." : "Request Appointment"}
          </button>
        </form>
      )}
    </div>
  );
}
