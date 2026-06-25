import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Section } from "@/components/Section";
import { pricing } from "@/lib/content";

export const metadata = {
  title: "Pricing",
  description: "Transparent TV mounting prices for Boca Raton, Coconut Creek, Coral Springs, and nearby South Florida cities."
};

export default function PricingPage() {
  return (
    <>
      <Section eyebrow="Pricing" title="Modern installs with clear starting rates.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-black/35 p-5">
              <h2 className="font-bold text-white/70">{item.title}</h2>
              <p className="mt-4 font-heading text-6xl text-neon">{item.price}</p>
              <p className="mt-3 text-sm leading-6 text-white/62">{item.note}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Calculator" title="Build your estimate.">
        <QuoteCalculator />
      </Section>
    </>
  );
}
