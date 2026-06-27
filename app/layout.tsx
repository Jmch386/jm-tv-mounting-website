import type { Metadata, Viewport } from "next";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { brand, localSeoCities } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jmtvmount.com"),
  title: {
    default: "JM TV Mounting & Installation | TV Mounting Boca Raton",
    template: "%s | JM TV Mounting & Installation"
  },
  description: "Premium TV mounting, wire concealment, soundbar installation, and home theater setup in Boca Raton, Coconut Creek, Coral Springs, Parkland, Deerfield Beach, and Pompano Beach.",
  keywords: [
    "TV Mounting Boca Raton",
    "TV Mounting Coconut Creek",
    "TV Mounting Coral Springs",
    "TV Mounting Parkland",
    "TV Mounting Deerfield Beach",
    "TV Mounting Pompano Beach",
    "TV Mounting Near Me",
    "Wire Concealment",
    "Home Theater Installation",
    "Soundbar Installation"
  ],
  openGraph: {
    title: "JM TV Mounting & Installation",
    description: "Clean, secure, perfectly leveled TV installations across Boca Raton, Coconut Creek, Coral Springs, Parkland, Deerfield Beach, and Pompano Beach.",
    url: "https://jmtvmount.com",
    siteName: brand.name,
    images: [{ url: "/brand/og-logo.png", width: 1200, height: 900 }],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/icon-only.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.name,
  image: "https://jmtvmount.com/brand/jm-tv-logo.png",
  telephone: brand.phone,
  priceRange: "$$",
  areaServed: localSeoCities.map((city) => city.name),
  serviceType: ["TV Mounting", "Wire Concealment", "In-Wall Wire Concealment", "Home Theater Installation", "Soundbar Installation"],
  url: "https://jmtvmount.com"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Header />
        <main>{children}</main>
        <ScrollToTopButton />
        <FloatingCallButton />
        <Footer />
      </body>
    </html>
  );
}
