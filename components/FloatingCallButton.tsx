import { Phone } from "lucide-react";
import { brand } from "@/lib/content";

export function FloatingCallButton() {
  return (
    <a
      href={brand.phoneHref}
      className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-3 rounded-lg bg-neon px-5 py-3 text-sm font-extrabold text-ink shadow-glow transition hover:-translate-y-0.5 sm:left-auto sm:right-5 sm:w-auto"
      aria-label={`Call JM TV Mounting at ${brand.phone}`}
    >
      <Phone size={19} />
      Call Now: {brand.phone}
    </a>
  );
}
