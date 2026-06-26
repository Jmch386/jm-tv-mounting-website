import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { localSeoCities, serviceDetails, services } from "@/lib/content";

export const metadata = {
  title: "Services",
  description: "Premium TV mounting, wire concealment, in-wall kits, soundbar installation, shelf installation, and home theater setup in Boca Raton, Coconut Creek, Coral Springs, Parkland, Deerfield Beach, and Pompano Beach."
};

export default function ServicesPage() {
  return (
    <>
      <Section eyebrow="Services" title="Premium installation services built around a cleaner room.">
        <div className="grid gap-5 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <article key={service.title} className="premium-card p-6">
              <CheckCircle2 className="mb-5 text-neon" size={30} />
              <h2 className="font-heading text-5xl">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">{service.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => <span key={tag} className="rounded-md border border-neon/30 bg-neon/10 px-3 py-1 text-xs font-extrabold text-neon">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-white/10 bg-black/35 p-4 text-sm font-bold text-white/76">
              {service}
            </div>
          ))}
        </div>
      </Section>
      <section className="section-band">
        <Section eyebrow="Local service" title="TV mounting near you.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localSeoCities.map((city) => (
              <Link key={city.slug} href={`/tv-mounting/${city.slug}`} className="premium-card flex items-start gap-3 p-5 transition hover:border-neon/40">
                <MapPin className="mt-1 shrink-0 text-neon" size={20} />
                <div>
                  <h2 className="font-heading text-3xl">TV Mounting {city.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/62">Clean installs, wire concealment, soundbar installation, and setup for homes in {city.name}.</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
