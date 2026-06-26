import Image from "next/image";

export function HeroInstallImage() {
  return (
    <div className="mx-auto w-full max-w-[92%] sm:max-w-[34rem] lg:max-w-[40rem]">
      <Image
        src="/gallery/featured-floating-console-install.jpg"
        alt="Featured floating console TV installation with clean lighting"
        width={1400}
        height={1808}
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 544px, 640px"
        className="aspect-[4/5] w-full rounded-lg border border-white/10 object-cover shadow-2xl shadow-black/35 sm:aspect-[5/4] lg:aspect-[4/5]"
        priority
      />
    </div>
  );
}
