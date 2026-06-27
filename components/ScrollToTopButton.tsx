"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 700);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-20 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-neon/45 bg-black/90 text-neon shadow-glow backdrop-blur transition duration-200 hover:bg-neon hover:text-white sm:bottom-5 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={21} />
    </button>
  );
}
