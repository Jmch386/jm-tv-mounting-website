import { GalleryGrid } from "@/components/GalleryGrid";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Gallery",
  description: "TV mounting photo gallery for living rooms, bedrooms, wire concealment, soundbars, and before and after installs."
};

export default function GalleryPage() {
  return (
    <Section eyebrow="Gallery" title="Real installs, clean finish.">
      <GalleryGrid />
    </Section>
  );
}
