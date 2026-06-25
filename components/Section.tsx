import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <div className="mb-9 max-w-3xl">
        {eyebrow && <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-neon">{eyebrow}</p>}
        <h2 className="headline text-5xl text-white md:text-7xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
