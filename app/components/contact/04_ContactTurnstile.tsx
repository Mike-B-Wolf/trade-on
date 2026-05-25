"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";

type ContactTurnstileProps = {
  visible: boolean;
};

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
    }
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export default function ContactTurnstile({ visible }: ContactTurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  const removeWidget = useCallback(() => {
    if (!widgetIdRef.current || !window.turnstile?.remove) return;

    window.turnstile.remove(widgetIdRef.current);
    widgetIdRef.current = null;
  }, []);

  useEffect(() => {
    if (
      !visible ||
      !scriptReady ||
      !containerRef.current ||
      !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      callback: (token: string) => {
        window.onTurnstileSuccess(token);
      },
      "expired-callback": () => {
        window.onTurnstileExpired();
      },
    });

    return removeWidget;
  }, [removeWidget, scriptReady, visible]);

  useEffect(() => removeWidget, [removeWidget]);

  if (!visible) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <div
        ref={containerRef}
        className="cf-turnstile origin-center scale-[0.78]"
      />
    </>
  );
}
