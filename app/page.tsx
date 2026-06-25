import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageSquare, Phone, ShieldCheck, Star, Timer, Wrench } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { HeroLogo } from "@/components/HeroLogo";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { brand, gallery, pricing, priorityCities, serviceDetails, testimonials, trustItems } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="premium-grid relative overflow-hidden border-b border-white/10 bg-ink">
        <div className="container-px mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-8 py-7 pb-12 md:min-h-[calc(100vh-5rem)] md:gap-10 md:py-18 lg:grid-cols-[minmax(0,1fr)_minmax(400px,460px)] xl:grid-cols-[minmax(0,1fr)_minmax(440px,500px)]">
          <div className="order-2 max-w-4xl lg:order-1">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-neon md:mb-4">South Florida TV mounting specialists</p>
            <h1 className="headline text-5xl text-white sm:text-7xl md:text-8xl lg:text-9xl">Premium TV Mounting & Wire Concealment</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:mt-6 md:text-lg md:leading-8">
              Clean, secure, perfectly leveled TV installations for Boca Raton, Coconut Creek, Coral Springs, Parkland, Deerfield Beach, and Pompano Beach.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a href={brand.phoneHref} className="btn-primary"><Phone size={18} /> Call Now</a>
              <a href={brand.textHref} className="btn-secondary"><MessageSquare size={18} /> Text Us</a>
              <a href="#quote" className="btn-secondary">Get a Free Quote <ArrowRight size={18} /></a>
            </div>
            <div className="mt-6 grid gap-3 text-sm font-bold text-white/75 sm:grid-cols-3 md:mt-7">
              <span className="flex items-center gap-2"><ShieldCheck className="text-neon" size={18} /> Secure mounting</span>
              <span className="flex items-center gap-2"><Wrench className="text-neon" size={18} /> Clean installs</span>
              <span className="flex items-center gap-2"><Timer className="text-neon" size={18} /> Same-day availability</span>
            </div>
            <p className="mt-6 font-heading text-5xl text-neon">{brand.phone}</p>
          </div>
          <div className="order-1 mb-4 lg:order-2 lg:mb-0 lg:self-start lg:pt-10 xl:pt-8">
            <HeroLogo />
          </div>
        </div>
      </section>

      <Section eyebrow="Why JM TV" title="A cleaner wall, a safer mount, a better room.">
        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="premium-card h-full p-5">
                <CheckCircle2 className="mb-5 text-neon" />
                <h3 className="font-heading text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="section-band">
        <Section eyebrow="Services" title="Specialized installation services.">
          <div className="grid gap-4 md:grid-cols-2">
            {serviceDetails.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="premium-card h-full p-6">
                  <h3 className="font-heading text-4xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{service.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => <span key={tag} className="rounded-md border border-neon/30 bg-neon/10 px-3 py-1 text-xs font-extrabold text-neon">{tag}</span>)}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <Section eyebrow="Local service" title="TV mounting near you.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {priorityCities.map((city) => (
            <div key={city} className="premium-card flex items-center gap-3 p-4">
              <MapPin className="shrink-0 text-neon" size={20} />
              <div>
                <h3 className="font-bold">TV Mounting {city}</h3>
                <p className="mt-1 text-xs text-white/55">Mounting, wire concealment, soundbar install, and setup.</p>
              </div>
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

      <Section eyebrow="Gallery" title="Real installs, cleaner layout.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <Link key={`${item.category}-${item.title}`} href="/gallery" className="group overflow-hidden rounded-lg border border-white/10 bg-white/[.045] shadow-premium">
              <Image src={item.thumb} alt={item.title} width={720} height={960} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-105 sm:aspect-[4/3]" />
              <div className="p-4">
                <p className="text-xs font-extrabold uppercase text-neon">{item.category}</p>
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
              <div className="flex gap-1 text-neon" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" size={18} />)}
              </div>
              <p className="mt-5 leading-7 text-white/74">&quot;{review.quote}&quot;</p>
              <p className="mt-5 text-sm font-extrabold">{review.name} - {review.city}</p>
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
