"use client";

import { MessageSquare } from "lucide-react";
import { type MouseEvent, type ReactNode, useState } from "react";
import { brand } from "@/lib/content";

function shouldUseSmsLink() {
  if (typeof window === "undefined") {
    return true;
  }

  const mobileUserAgent = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  return mobileUserAgent || window.matchMedia("(max-width: 767px)").matches;
}

async function copyPhoneNumber() {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(brand.phone);
      return;
    } catch {
      // Fall back to the selection-based copy method below.
    }
  }

  const input = document.createElement("textarea");
  input.value = brand.phone;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

export function TextUsButton({ className, children, iconSize = 18 }: { className: string; children?: ReactNode; iconSize?: number }) {
  const [copied, setCopied] = useState(false);

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (shouldUseSmsLink()) {
      return;
    }

    event.preventDefault();
    await copyPhoneNumber();
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }

  return (
    <>
      <a href={brand.textHref} className={className} onClick={handleClick} aria-label={`Text JM TV Mounting at ${brand.phone}`}>
        {children ?? (
          <>
            <MessageSquare size={iconSize} />
            Text Us
          </>
        )}
      </a>
      {copied && (
        <div className="fixed right-4 top-24 z-[60] rounded-lg border border-neon/40 bg-black px-4 py-3 text-sm font-bold text-white shadow-glow" role="status">
          Phone number copied: {brand.phone}
        </div>
      )}
    </>
  );
}
