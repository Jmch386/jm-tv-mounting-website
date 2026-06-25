import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { HeroLogo } from "@/components/HeroLogo";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { brand, gallery, pricing, services, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="premium-grid relative overflow-hidden border-b border-white/10 bg-ink">
        <div className="container-px mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1fr_460px]">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-neon">South Florida TV mounting specialists</p>
            <h1 className="headline text-6xl text-white sm:text-7xl md:text-8xl lg:text-9xl">Professional TV Mounting & Wire Concealment</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Clean, secure, perfectly leveled TV installations throughout South Florida.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={brand.phoneHref} className="btn-primary"><Phone size={18} /> Call or Text</a>
              <a href="#quote" className="btn-secondary">Get a Free Quote <ArrowRight size={18} /></a>
            </div>
            <p className="mt-6 font-heading text-5xl text-neon">{brand.phone}</p>
          </div>
          <HeroLogo />
        </div>
      </section>

      <Section eyebrow="Services" title="Clean installs, premium finish.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-white/10 bg-white/[.045] p-5">
              <CheckCircle2 className="mb-5 text-neon" />
              <h3 className="font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing" title="Straightforward starting rates.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-black/35 p-5">
              <p className="text-sm font-bold text-white/55">{item.title}</p>
              <p className="mt-3 font-heading text-5xl text-neon">{item.price}</p>
              <p className="mt-3 text-sm text-white/62">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Calculator" title="Instant quote estimate.">
        <QuoteCalculator />
      </Section>

      <Section eyebrow="Gallery" title="Organized by install type.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {gallery.map((item) => (
            <Link key={item.category} href="/gallery" className="group overflow-hidden rounded-lg border border-white/10 bg-white/[.045]">
              <Image src={item.image} alt={item.title} width={640} height={440} className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
              <div className="p-4">
                <p className="font-bold">{item.category}</p>
                <p className="mt-1 text-xs text-white/58">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Reviews" title="Trusted by local homeowners.">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((review) => (
            <div key={review.name} className="rounded-lg border border-white/10 bg-black/35 p-6">
              <p className="text-xl text-neon">★★★★★</p>
              <p className="mt-5 leading-7 text-white/74">&quot;{review.quote}&quot;</p>
              <p className="mt-5 text-sm font-extrabold">{review.name} · {review.city}</p>
            </div>
          ))}
        </div>
        <a href="https://www.google.com/search?q=JM+TV+Mounting+%26+Installation+reviews" className="btn-primary mt-6" target="_blank" rel="noreferrer">Leave a Google Review</a>
      </Section>

      <Section eyebrow="Quote" title="Get on the schedule.">
        <QuoteForm />
        <div className="mt-6">
          <BookingForm />
        </div>
      </Section>
    </>
  );
}
