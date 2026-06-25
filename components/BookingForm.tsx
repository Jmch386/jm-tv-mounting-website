"use client";

import { CalendarCheck, Upload } from "lucide-react";
import { useState } from "react";

const bookingEndpoint = "https://formsubmit.co/jmtvmounting@gmail.com";

export function BookingForm() {
  const [requested, setRequested] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <div className="rounded-lg border border-white/10 bg-black/35 p-5">
      <div className="mb-5 flex items-center gap-3">
        <CalendarCheck className="text-neon" />
        <h3 className="font-heading text-4xl">Online Booking</h3>
      </div>
      {requested ? (
        <p className="rounded-lg bg-neon/10 p-4 font-bold text-neon">
          Thanks! Your appointment request was sent. JM TV Mounting will call or text you shortly.
        </p>
      ) : (
        <>
          <iframe
            className="hidden"
            title="Booking form submission"
            name="booking-submit-frame"
            onLoad={() => {
              if (hasSubmitted) {
                setSubmitting(false);
                setRequested(true);
              }
            }}
          />
          <form
            action={bookingEndpoint}
            className="grid gap-4 md:grid-cols-2"
            encType="multipart/form-data"
            method="POST"
            target="booking-submit-frame"
            onSubmit={() => {
              setHasSubmitted(true);
              setSubmitting(true);
            }}
          >
            <input type="hidden" name="_subject" value="New JM TV Mounting appointment request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

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

            <input className="field" name="preferred_date" required type="date" aria-label="Preferred date" />
            <select className="field" name="preferred_time" required defaultValue="">
              <option value="" disabled>Preferred time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>First available</option>
            </select>

            <textarea className="field min-h-28 md:col-span-2" name="message" placeholder="Message or install details" />
            <label className="field flex cursor-pointer items-center gap-3 text-white/70 md:col-span-2">
              <Upload size={18} />
              Photos if included
              <input type="file" name="attachment" accept="image/*" multiple className="hidden" />
            </label>

            <button className="btn-secondary md:col-span-2" type="submit" disabled={submitting}>
              {submitting ? "Sending request..." : "Request Appointment"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
