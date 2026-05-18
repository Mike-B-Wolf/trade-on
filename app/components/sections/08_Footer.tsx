"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative mt-8 overflow-hidden rounded-t-[2rem] border-t border-white/10 bg-[#06101f]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_26%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-5 sm:px-8 lg:grid-cols-[0.9fr_1.3fr] lg:px-10">
        {/* Left */}
        <div className="flex items-center gap-5">
          <img
            src="/company.png"
            alt="TRADE-ON LLC"
            className="h-30 w-auto object-contain"
          />

          <p className="max-w-[240px] text-xs leading-6 text-white/52 sm:text-sm">
            日本の良いモノを世界へ、
            <br />
            価値あるものづくりを支援します。
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-8 sm:grid-cols-2">
          {/* MENU */}
          <div>
            <div className="text-[10px] font-black tracking-[0.28em] text-cyan-200/75">
              MENU
            </div>

            <div className="mt-3 grid gap-2 text-sm text-white/66">
              {[
                ["#service", "サービス"],
                ["#products", "取扱商品"],
                ["#flow", "ご利用の流れ"],
                ["/contact", "お問い合わせ"],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-[2px] w-0 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-300 group-hover:w-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-[10px] font-black tracking-[0.28em] text-fuchsia-200/75">
              CONTACT
            </div>

            <div className="mt-3 space-y-3 text-sm text-white/66">
              <a
                href="tel:09064533315"
                className="group flex items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4a84f]/20 bg-[#d4a84f]/10">
                  <Phone className="h-4 w-4 text-[#d4a84f]" />
                </span>

                <span>090-6453-3315</span>
              </a>

              <a
                href="mailto:trade.on.company@gmail.com"
                className="group flex items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4a84f]/20 bg-[#d4a84f]/10">
                  <Mail className="h-4 w-4 text-[#d4a84f]" />
                </span>

                <span className="break-all">
                  trade.on.company@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-4 py-2 text-center text-[11px] tracking-[0.18em] text-white/30">
        © 2026 TRADE-ON LLC. All rights reserved.
      </div>
    </motion.footer>
  );
}