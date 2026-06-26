import Image from "next/image";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { CallNowButton } from "@/components/CallNowButton";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { TextUsButton } from "@/components/TextUsButton";
import { brand, cities } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description: "Call, text, or request a quote from JM TV Mounting & Installation."
};

export default function ContactPage() {
  return (
    <>
      <Section eyebrow="Contact" title="Call, text, or request a quote.">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="premium-card flex items-center justify-center p-5">
            <Image src={brand.logo} alt="JM TV Mounting & Installation logo" width={320} height={320} className="h-auto w-full max-w-56 rounded-md object-contain" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <CallNowButton className="premium-card block p-6"><Phone className="mb-5 text-neon" /><p className="font-bold">Call Now</p><p className="mt-2 text-white/65">{brand.phone}</p></CallNowButton>
            <TextUsButton className="premium-card block p-6"><MessageSquare className="mb-5 text-neon" /><p className="font-bold">Text Us</p><p className="mt-2 text-white/65">{brand.phone}</p></TextUsButton>
            <div className="premium-card p-6"><Mail className="mb-5 text-neon" /><p className="font-bold">Email</p><p className="mt-2 text-white/65">{brand.emailText}</p></div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Service Area Map" title="South Florida coverage.">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <iframe title="JM TV Mounting service area map" className="min-h-[420px] w-full rounded-lg border border-white/10 grayscale invert" loading="lazy" src="https://www.google.com/maps?q=Boca%20Raton%20Florida&output=embed" />
          <div className="rounded-lg border border-white/10 bg-black/35 p-5">
            <MapPin className="mb-5 text-neon" />
            <div className="grid grid-cols-2 gap-3 text-sm text-white/72">
              {cities.map((city) => <span key={city}>{city}</span>)}
            </div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Quote" title="Tell us about the install.">
        <QuoteForm />
      </Section>
    </>
  );
}
