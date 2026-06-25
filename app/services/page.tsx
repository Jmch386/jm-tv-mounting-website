import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services",
  description: "TV mounting, wire concealment, in-wall kits, soundbar installation, shelf installation, and home theater setup in South Florida."
};

export default function ServicesPage() {
  return (
    <Section eyebrow="Services" title="Installation services built around a cleaner room.">
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service} className="rounded-lg border border-white/10 bg-white/[.045] p-6">
            <CheckCircle2 className="mb-5 text-neon" size={30} />
            <h2 className="font-heading text-4xl">{service}</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Professional planning, secure mounting, clean alignment, and a premium final walkthrough for {service.toLowerCase()} projects.
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
