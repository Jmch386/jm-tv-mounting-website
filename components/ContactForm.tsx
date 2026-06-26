"use client";

import { type FormEvent, useState } from "react";

const contactEndpoint = "https://formspree.io/f/xzdleeow";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
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
        <p className="mt-2 font-bold">Your message has been sent. We&apos;ll call or text you shortly.</p>
      </div>
    );
  }

  return (
    <form data-hide-floating-call className="grid gap-3 rounded-lg border border-white/10 bg-white/[.045] p-4 pb-20 sm:p-5 md:gap-4 lg:pb-5" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New JM TV Mounting contact request" />
      <div className="grid gap-3 md:grid-cols-3">
        <input className="field" name="name" required placeholder="Name" />
        <input className="field" name="phone" required placeholder="Phone" type="tel" />
        <input className="field" name="email" required placeholder="Email" type="email" />
      </div>
      <textarea className="field min-h-32" name="message" required placeholder="How can we help?" />
      {error && <p className="rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-sm font-bold text-red-200">{error}</p>}
      <button className="btn-primary w-full lg:w-auto" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
    </form>
  );
}
