import Link from "next/link";
import { brand, localSeoCities, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container-px mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <video
            className="mb-5 h-auto w-32 rounded-md object-contain sm:w-40"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={brand.logo}
            aria-label="JM TV Mounting & Installation logo"
          >
            <source src="/brand/footer-video-logo.mp4" type="video/mp4" />
          </video>
          <p className="max-w-md text-sm leading-7 text-white/65">
            Premium TV mounting, wire concealment, soundbar installation, streaming setup, and home theater services throughout South Florida.
          </p>
          <p className="mt-5 font-extrabold text-neon">{brand.phone}</p>
          <p className="text-sm text-white/65">{brand.emailText}</p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl">Pages</h3>
          <div className="grid gap-2 text-sm text-white/70">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-neon">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl">Service Area</h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-white/65">
            {localSeoCities.map((city) => (
              <Link key={city.slug} href={`/tv-mounting/${city.slug}`} className="hover:text-neon">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
