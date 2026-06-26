import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MessageSquare, Phone, Star } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { CallNowButton } from "@/components/CallNowButton";
import { HeroLogo } from "@/components/HeroLogo";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { TextUsButton } from "@/components/TextUsButton";
import { brand, gallery, pricing, serviceDetails, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-white/10 bg-ink">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-0 py-6 pb-12 md:gap-10 md:py-18 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)]">
          <div className="order-2 max-w-3xl lg:order-1">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-neon">South Florida TV mounting</p>
            <h1 className="headline text-5xl text-white sm:text-6xl md:text-7xl">
              Professional TV Mounting & Wire Concealment
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Clean, secure, perfectly leveled TV installations throughout South Florida.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallNowButton className="btn-primary" />
              <a href="#quote" className="btn-secondary">Get a Free Quote</a>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-bold text-white/70 sm:grid-cols-3">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-neon" size={18} /> Clean finish</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-neon" size={18} /> Secure mount</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-neon" size={18} /> Hidden wires</span>
            </div>
          </div>
          <div className="order-1 mb-8 lg:order-2 lg:mb-0">
            <HeroLogo />
          </div>
        </div>
      </section>

      <Section eyebrow="Services" title="Simple, clean installation services.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {serviceDetails.map((service) => (
            <article key={service.title} className="premium-card h-full p-5">
              <h3 className="font-heading text-3xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{service.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-band">
        <Section eyebrow="Pricing" title="Clear starting rates.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((item) => (
              <article key={item.title} className="premium-card flex h-full flex-col p-5">
                <h3 className="text-sm font-extrabold text-white/72">{item.title}</h3>
                <p className="mt-3 font-heading text-5xl text-neon">{item.price}</p>
                <p className="mt-auto pt-2 text-sm leading-6 text-white/60">{item.note}</p>
              </article>
            ))}
          </div>
        </Section>
      </section>

      <Section eyebrow="Gallery" title="Recent installs.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((item) => (
            <Link key={`${item.category}-${item.title}`} href="/gallery" className="group overflow-hidden rounded-lg border border-white/10 bg-black/35">
              <Image src={item.thumb} alt={item.title} width={720} height={960} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="aspect-[4/5] w-full object-cover transition duration-200 group-hover:scale-[1.02] sm:aspect-[4/3]" />
              <div className="p-4">
                <p className="text-xs font-extrabold uppercase text-neon">{item.category}</p>
                <p className="mt-1 text-sm text-white/68">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="section-band">
        <Section eyebrow="Reviews" title="Trusted by local homeowners.">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="premium-card p-6">
                <div className="flex gap-1 text-neon" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" size={18} />)}
                </div>
                <p className="mt-5 leading-7 text-white/74">&quot;{review.quote}&quot;</p>
                <p className="mt-5 text-sm font-extrabold text-white">{review.name} - {review.city}</p>
              </article>
            ))}
          </div>
        </Section>
      </section>

      <Section id="quote" eyebrow="Quote" title="Request a quote.">
        <QuoteForm />
        <div className="mt-6">
          <BookingForm />
        </div>
      </Section>

      <Section eyebrow="Contact" title="Call, text, or email.">
        <div className="grid gap-4 md:grid-cols-3">
          <CallNowButton className="premium-card block p-6"><Phone className="mb-5 text-neon" /><p className="font-bold">Call Now</p><p className="mt-2 text-white/65">{brand.phone}</p></CallNowButton>
          <TextUsButton className="premium-card block p-6"><MessageSquare className="mb-5 text-neon" /><p className="font-bold">Text Us</p><p className="mt-2 text-white/65">{brand.phone}</p></TextUsButton>
          <div className="premium-card p-6"><Mail className="mb-5 text-neon" /><p className="font-bold">Email</p><p className="mt-2 text-white/65">{brand.emailText}</p></div>
        </div>
      </Section>
    </>
  );
}
