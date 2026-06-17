"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/locales/types";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary["header"];
};

export default function Header({ lang, dict }: HeaderProps) {
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homeHref = lang === "ja" ? "/" : "/en";
  const contactHref = lang === "ja" ? "/contact" : "/en/contact";
  const jpClassName =
    lang === "ja"
      ? "text-amber-300 hover:text-amber-200"
      : "text-white/85 hover:text-white";
  const enClassName =
    lang === "en"
      ? "text-amber-300 hover:text-amber-200"
      : "text-white/85 hover:text-white";

  useEffect(() => {
    const handleScroll = () => {
      setShowContact(window.scrollY > 220);
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link
          href={homeHref}
          className={`group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-full border px-3 py-2 backdrop-blur-2xl transition-all duration-500 ${
            scrolled
              ? "border-white/15 bg-[#050b18]/75 shadow-[0_0_45px_rgba(34,211,238,0.12)]"
              : "border-white/10 bg-black/25"
          }`}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition duration-700 group-hover:translate-x-full" />
          <Image
            src="/company_yoko.png"
            alt="TRADE-ON LLC"
            width={210}
            height={64}
            priority
            className="relative h-[23px] w-auto object-contain transition duration-500 group-hover:scale-[1.03] min-[390px]:h-[28px] min-[412px]:h-[35px] sm:h-16"
          />
        </Link>

        <nav
          className={`hidden shrink-0 items-center gap-9 whitespace-nowrap rounded-full border px-8 py-4 text-sm font-semibold tracking-[0.18em] text-white/85 backdrop-blur-2xl transition-all duration-500 xl:flex ${
            scrolled
              ? "border-white/15 bg-[#050b18]/78 shadow-[0_0_60px_rgba(168,85,247,0.14)]"
              : "border-white/10 bg-black/20"
          }`}
        >
          {dict.nav.map((item) => {
            const className =
              "group relative whitespace-nowrap transition hover:text-white";
            const content = (
              <>
                <div className="relative z-10 transition duration-300 group-hover:text-cyan-100">
                  {item.en}
                </div>
                <div className="relative z-10 mt-1 whitespace-nowrap text-sm tracking-normal text-white/55 transition duration-300 group-hover:text-white/85">
                  {item.label}
                </div>
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </>
            );

            return item.href.startsWith("/") ? (
              <Link
                key={item.en}
                href={item.href}
                prefetch={false}
                className={className}
              >
                {content}
              </Link>
            ) : (
              <a key={item.en} href={item.href} className={className}>
                {content}
              </a>
            );
          })}
          <div
            className="group relative whitespace-nowrap transition hover:text-white"
            aria-label="Language selector"
          >
            <div className="relative z-10 text-white/85 transition duration-300">
              {dict.language}
            </div>
            <div className="relative z-10 mt-1 flex h-5 min-w-28 items-center justify-center gap-3 whitespace-nowrap text-sm tracking-normal text-white/55 transition duration-300">
              <Link
                href="/"
                prefetch={false}
                className={`inline-flex h-5 items-center px-2 transition duration-300 ${jpClassName}`}
              >
                JP
              </Link>
              <span className="text-white/35" aria-hidden="true">
                /
              </span>
              <Link
                href="/en"
                prefetch={false}
                className={`inline-flex h-5 items-center px-2 transition duration-300 ${enClassName}`}
              >
                EN
              </Link>
            </div>
            <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[#050b18]/45 px-4 py-2 text-sm font-bold tracking-[0.12em] text-white/75 backdrop-blur-2xl xl:hidden"
            aria-label="Language selector"
          >
            <Link
              href="/"
              prefetch={false}
              className={`px-1.5 py-1 transition duration-300 ${jpClassName}`}
            >
              JP
            </Link>
            <span className="text-white/35" aria-hidden="true">
              |
            </span>
            <Link
              href="/en"
              prefetch={false}
              className={`px-1.5 py-1 transition duration-300 ${enClassName}`}
            >
              EN
            </Link>
          </div>

          <div
            className={`shrink-0 transition-all duration-500 ${
              showContact
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0 sm:pointer-events-auto sm:translate-y-0 sm:opacity-100"
            }`}
          >
            <Link
              href={contactHref}
              prefetch={false}
              className="group relative block overflow-hidden rounded-full border border-white/20 bg-white px-4 py-2.5 text-xs font-black text-black shadow-[0_0_35px_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(34,211,238,0.32)] sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-4 lg:text-lg"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative">{dict.contactButton}</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
