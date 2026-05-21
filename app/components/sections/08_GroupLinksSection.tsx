"use client";

import {
  motion
} from "framer-motion";

import {
  MessageCircle,
  ExternalLink,
  Camera,
} from "lucide-react";

const groupLinks = [
  {
    name: "TRADE-ON LLC",
    description: "貿易事業・ブランド事業",
    logo: "/company.png",
    logoClass: "scale-165 p-0 translate-y-1",
    instagram:
      "https://www.instagram.com/trade.on.llc?igsh=YzcxdDc4a2x4em0w&utm_source=qr",
    line: "https://lin.ee/N2prwfY",
  },
  {
    name: "カーマッチ青森弘前店",
    description: "自動車販売・買取",
    logo: "/carmatch.png",
    logoClass: "scale-110 p-1 translate-y-1",
    instagram:
      "https://www.instagram.com/carmatchaomorihirosaki?igsh=MW1peHZlM3c1NmFkdw%3D%3D&utm_source=qr",
    line: "https://lin.ee/OfPSHAH",
  },
  {
    name: "HIGH END",
    description: "高級腕時計・ジュエリー",
    logo: "/highend.jpg",
    logoClass: "scale-105 p-1 translate-y-1",
    instagram:
      "https://www.instagram.com/high.end1121?igsh=MWcwODNoYnFkMnQ1eg%3D%3D&utm_source=qr",
    line: "https://lin.ee/rF5vUHc",
  },
];

export default function GroupLinksSection() {
  return (
    <section className="relative overflow-hidden bg-[#050c16] px-5 py-8 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b1c2b] via-[#101a31] to-[#2a1746] px-5 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-8 lg:px-10"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_30%)]" />

        <div className="relative text-center">
          <div className="mx-auto inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/8 px-5 py-2 text-[11px] font-black tracking-[0.32em] text-cyan-200">
            OFFICIAL LINKS
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
            公式SNS・関連事業
          </h2>

          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-5 text-white/62 sm:text-lg">
            各ブランドの最新情報や取り組みを、SNSで発信しています。
          </p>
        </div>

        <div className="relative mt-10 grid gap-5 lg:grid-cols-3">
          {groupLinks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.07]"
            >
              <div className="flex min-h-[72px] items-center gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={`h-full w-full object-contain ${item.logoClass}`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black tracking-wide text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-base text-white/54">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <div className="grid gap-3">
                <a
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-base text-white/72 transition hover:border-pink-300/40 hover:bg-pink-400/10 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400">
                      <Camera className="h-4 w-4 text-white" />
                    </span>
                    Instagram
                  </span>

                  <ExternalLink className="h-4 w-4 opacity-60 transition group-hover/link:opacity-100" />
                </a>

                <a
                  href={item.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-base text-white/72 transition hover:border-green-300/40 hover:bg-green-400/10 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </span>
                    LINE公式アカウント
                  </span>

                  <ExternalLink className="h-4 w-4 opacity-60 transition group-hover/link:opacity-100" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}