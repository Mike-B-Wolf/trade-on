"use client";

import Script from "next/script";

type ContactTurnstileProps = {
  visible: boolean;
};

export default function ContactTurnstile({ visible }: ContactTurnstileProps) {
  if (!visible) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <div
        className="cf-turnstile origin-center scale-[0.78]"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-callback="onTurnstileSuccess"
        data-expired-callback="onTurnstileExpired"
      />
    </>
  );
}