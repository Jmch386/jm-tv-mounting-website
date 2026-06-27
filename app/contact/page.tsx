import Link from "next/link";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { CallNowButton } from "@/components/CallNowButton";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { TextUsButton } from "@/components/TextUsButton";
import { brand } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description: "Call, text, or request a quote from JM TV Mounting & Installation."
};

export default function ContactPage() {
  return (
    <>
      <Section eyebrow="Contact" title="Call, text, or request a quote.">
        <div className="grid gap-4 md:grid-cols-3">
          <CallNowButton className="premium-card block p-6"><Phone className="mb-5 text-neon" /><p className="font-bold">Call Now</p><p className="mt-2 text-white/65">{brand.phone}</p></CallNowButton>
          <TextUsButton className="premium-card block p-6"><MessageSquare className="mb-5 text-neon" /><p className="font-bold">Text Us</p><p className="mt-2 text-white/65">{brand.phone}</p></TextUsButton>
          <Link href="#contact-form" className="premium-card block p-6 transition hover:border-neon/40"><Mail className="mb-5 text-neon" /><p className="font-bold">Email Us</p><p className="mt-2 text-white/65">{brand.emailText}</p></Link>
        </div>
      </Section>
      <Section id="contact-form" eyebrow="Contact Form" title="Send us a message.">
        <ContactForm />
      </Section>
    </>
  );
}
