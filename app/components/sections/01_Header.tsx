"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navigationItems = [
  ["#service", "SERVICE", "事業内容"],
  ["#products", "PRODUCTS", "取扱商品"],
  ["#strength", "STRENGTH", "私たちの強み"],
  ["#flow", "FLOW", "ご利用の流れ"],
  ["/contact", "CONTACT", "お問い合わせ"],
];

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a
          href="/"
          className={`group relative flex items-center gap-3 overflow-hidden rounded-full border px-3 py-2 backdrop-blur-2xl transition-all duration-500 ${
            scrolled
              ? "border-white/15 bg-[#050b18]/75 shadow-[0_0_45px_rgba(34,211,238,0.12)]"
              : "border-white/10 bg-black/25"
          }`}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition duration-700 group-hover:translate-x-full" />
          <img
            src="/company_yoko.png"
            alt="TRADE-ON LLC"
            className="relative h-13 w-auto object-contain transition duration-500 group-hover:scale-[1.03] sm:h-16"
          />
        </a>

        <nav
          className={`hidden items-center gap-9 rounded-full border px-8 py-4 text-sm font-semibold tracking-[0.18em] text-white/85 backdrop-blur-2xl transition-all duration-500 xl:flex ${
            scrolled
              ? "border-white/15 bg-[#050b18]/78 shadow-[0_0_60px_rgba(168,85,247,0.14)]"
              : "border-white/10 bg-black/20"
          }`}
        >
          {navigationItems.map(([href, en, ja]) => (
            <a
              key={en}
              href={href}
              className="group relative transition hover:text-white"
            >
              <div className="relative z-10 transition duration-300 group-hover:text-cyan-100">
                {en}
              </div>
              <div className="relative z-10 mt-1 text-sm tracking-normal text-white/55 transition duration-300 group-hover:text-white/85">
                {ja}
              </div>
              <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div
          className={`flex items-center gap-2 transition-all duration-500 ${
            showContact
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0 sm:translate-y-0 sm:opacity-100"
          }`}
        >
          <a
            href="/contact"
            className="group relative overflow-hidden rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-black text-black shadow-[0_0_35px_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(34,211,238,0.32)] lg:px-8 lg:py-4 lg:text-lg"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative">お問い合わせ →</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}