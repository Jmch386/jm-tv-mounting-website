import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <div className="mb-9 max-w-4xl">
        {eyebrow ? (
          <>
            <h2 className="headline text-6xl text-neon sm:text-7xl md:text-8xl">{eyebrow}</h2>
            <p className="mt-3 max-w-3xl text-xl font-extrabold leading-tight text-white sm:text-2xl md:text-3xl">
              {title}
            </p>
          </>
        ) : (
          <h2 className="headline text-6xl text-white sm:text-7xl md:text-8xl">{title}</h2>
        )}
      </div>
      {children}
    </section>
  );
}
