"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Printer } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative mt-1 overflow-hidden rounded-t-[2rem] border-t border-white/10 bg-[#06101f]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_26%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-4 sm:px-8 lg:grid-cols-[0.9fr_1.3fr] lg:px-10">
        {/* Left */}
        <div className="flex items-center gap-5">
          <Image
            src="/company.png"
            alt="TRADE-ON LLC"
            width={1536}
            height={1024}
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

            <div className="mt-3 grid gap-1 text-sm text-white/66">
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

            <div className="mt-3 space-y-1 text-sm text-white/66">
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
                href="fax:05031485847"
                className="group flex items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4a84f]/20 bg-[#d4a84f]/10">
                  <Printer className="h-4 w-4 text-[#d4a84f]" />
                </span>

                <span>050-3148-5847</span>
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
              <div className="flex items-start gap-3 text-white/66">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4a84f]/20 bg-[#d4a84f]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#d4a84f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>

                <span className="leading-6">
                  青森県弘前市大字城東中央3丁目1番地24
                </span>
              </div>
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
