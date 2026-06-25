import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jmtvmounting.com"),
  title: {
    default: "JM TV Mounting & Installation | TV Mounting Boca Raton",
    template: "%s | JM TV Mounting & Installation"
  },
  description: "Premium TV mounting, wire concealment, soundbar installation, and home theater setup throughout Boca Raton, Coconut Creek, Coral Springs, and South Florida.",
  keywords: [
    "TV Mounting Boca Raton",
    "TV Mounting Coconut Creek",
    "TV Mounting Coral Springs",
    "TV Mounting Near Me",
    "Wire Concealment",
    "Home Theater Installation",
    "Soundbar Installation"
  ],
  openGraph: {
    title: "JM TV Mounting & Installation",
    description: "Clean, secure, perfectly leveled TV installations throughout South Florida.",
    url: "https://jmtvmounting.com",
    siteName: brand.name,
    images: [{ url: "/brand/jm-tv-logo.png", width: 1200, height: 1200 }],
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
  image: "https://jmtvmounting.com/brand/jm-tv-logo.png",
  telephone: brand.phone,
  email: brand.email,
  priceRange: "$$",
  areaServed: ["Boca Raton", "Coconut Creek", "Coral Springs", "Parkland", "Fort Lauderdale"],
  serviceType: ["TV Mounting", "Wire Concealment", "Home Theater Installation", "Soundbar Installation"],
  url: "https://jmtvmounting.com"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
