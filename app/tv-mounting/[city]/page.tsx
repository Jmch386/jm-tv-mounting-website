import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { CallNowButton } from "@/components/CallNowButton";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { brand, localSeoCities, pricing, serviceDetails } from "@/lib/content";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

function getCity(slug: string) {
  return localSeoCities.find((city) => city.slug === slug);
}

export function generateStaticParams() {
  return localSeoCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);

  if (!city) {
    return {
      title: "TV Mounting South Florida",
      description: "Professional TV mounting, wire concealment, and soundbar installation in South Florida."
    };
  }

  return {
    title: `TV Mounting ${city.name}`,
    description: `Professional TV mounting, wire concealment, soundbar installation, and home theater setup in ${city.name}. Clean, secure installs by JM TV Mounting & Installation.`,
    alternates: {
      canonical: `/tv-mounting/${city.slug}`
    },
    openGraph: {
      title: `TV Mounting ${city.name} | JM TV Mounting & Installation`,
      description: `Clean TV mounting, hidden wires, soundbar installation, and secure wall mounting in ${city.name}.`,
      url: `https://jmtvmount.com/tv-mounting/${city.slug}`,
      images: [{ url: "/brand/og-logo.png", width: 1200, height: 900 }]
    }
  };
}

export default async function CityTvMountingPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCity(slug) ?? localSeoCities[0];
  const pageUrl = `https://jmtvmount.com/tv-mounting/${city.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `TV Mounting in ${city.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: brand.name,
      telephone: brand.phone,
      url: "https://jmtvmount.com"
    },
    areaServed: {
      "@type": "City",
      name: city.name
    },
    serviceType: "TV Mounting",
    url: pageUrl
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="border-b border-white/10 bg-ink">
        <div className="container-px mx-auto grid max-w-7xl gap-8 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-neon">TV mounting in {city.name}</p>
            <h1 className="headline text-5xl text-white md:text-7xl">
              Professional TV Mounting in {city.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 md:text-lg">
              JM TV Mounting & Installation provides clean, secure TV mounting, wire concealment, soundbar installation, and home theater setup for homes in {city.name} and nearby {city.county} neighborhoods.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallNowButton className="btn-primary" />
              <Link href="#quote" className="btn-secondary">Get a Free Quote</Link>
            </div>
          </div>
          <aside className="premium-card p-6">
            <MapPin className="mb-5 text-neon" size={28} />
            <h2 className="font-heading text-4xl text-white">{city.name} Service Area</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Fast local quote requests for standard mounting, large-format TVs, full-motion mounts, wire concealment, and soundbar installs.
            </p>
          </aside>
        </div>
      </section>

      <Section eyebrow="Services" title={`Clean TV installation services in ${city.name}.`}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {serviceDetails.map((service) => (
            <article key={service.title} className="premium-card h-full p-5">
              <CheckCircle2 className="mb-4 text-neon" size={24} />
              <h2 className="font-heading text-3xl text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/68">{service.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-band">
        <Section eyebrow="Pricing" title="Clear starting rates for local installs.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((item) => (
              <article key={item.title} className="premium-card flex h-full flex-col p-5">
                <h2 className="text-sm font-extrabold text-white/72">{item.title}</h2>
                <p className="mt-3 font-heading text-5xl text-neon">{item.price}</p>
                <p className="mt-auto pt-2 text-sm leading-6 text-white/60">{item.note}</p>
              </article>
            ))}
          </div>
        </Section>
      </section>

      <Section eyebrow="Why JM" title={`A cleaner finish for ${city.name} homes.`}>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Studs and mount placement checked before drilling.",
            "TV is leveled, secured, and reviewed before completion.",
            "Wire concealment options keep the room looking finished."
          ].map((item) => (
            <article key={item} className="premium-card p-6">
              <ShieldCheck className="mb-5 text-neon" />
              <p className="leading-7 text-white/72">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-band" id="quote">
        <Section eyebrow="Quote" title={`Request a ${city.name} TV mounting quote.`}>
          <QuoteForm />
        </Section>
      </section>
    </>
  );
}
