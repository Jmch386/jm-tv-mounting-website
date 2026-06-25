import { Star } from "lucide-react";
import { Section } from "@/components/Section";
import { testimonials } from "@/lib/content";

export const metadata = {
  title: "Reviews",
  description: "Customer testimonials for JM TV Mounting & Installation."
};

export default function ReviewsPage() {
  return (
    <Section eyebrow="Google Reviews" title="Five-star service, clean results.">
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((review) => (
          <article key={review.name} className="rounded-lg border border-white/10 bg-black/35 p-6">
            <div className="mb-5 flex text-neon">{Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" size={20} />)}</div>
            <p className="leading-7 text-white/74">&quot;{review.quote}&quot;</p>
            <p className="mt-5 text-sm font-extrabold">{review.name}</p>
            <p className="text-xs text-white/52">{review.city}</p>
          </article>
        ))}
      </div>
      <a className="btn-primary mt-7" href="https://www.google.com/search?q=JM+TV+Mounting+%26+Installation+reviews" target="_blank" rel="noreferrer">Google Review Button</a>
    </Section>
  );
}
