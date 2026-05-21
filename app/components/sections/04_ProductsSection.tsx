"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

// Product Cards
const cards = [
  { title: "自動車", en: "Used Cars", image: "/cars.png", icon: "/icon-cars.png" },
  { title: "海産物", en: "Seafood", image: "/seafood.png", icon: "/icon-seafood.png" },
  { title: "農産物", en: "Agriculture", image: "/farm.png", icon: "/icon-farm.png" },
  { title: "抹茶", en: "Matcha", image: "/matcha.png", icon: "/icon-matcha.png" },
  { title: "時計・宝飾", en: "Luxury Goods", image: "/watch.png", icon: "/icon-watch.png" },
  { title: "その他", en: "Others", image: "/other.png", icon: "/icon-global.png" },
];

export default function ProductsSection() {
  return (
    <motion.section
      id="products"
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mt-7 grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,17,35,0.98),rgba(10,13,28,0.95))] p-6 shadow-[0_0_80px_rgba(168,85,247,0.10)] sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-fuchsia-300/25 bg-fuchsia-400/10 px-4 py-2 text-xs font-black tracking-[0.28em] text-fuchsia-200 shadow-[0_0_30px_rgba(217,70,239,0.14)]">
            PRODUCTS
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:mt-6 sm:text-5xl">
            多彩な商品を
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-transparent">
              取り扱っています。
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-white/72 sm:mt-8 sm:text-lg">
            中古車、海産物、抹茶、農作物、時計・ブランド品、ジュエリーなど、
            国内外の取引ニーズに合わせて柔軟に対応いたします。
            また、輸出入に関するサポートや各種コンサルティングも承ります。
          </p>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-fuchsia-400/60 via-cyan-300/50 to-transparent" />

          <div className="mt-5 text-xs font-bold tracking-[0.25em] text-white/35">
            GLOBAL SOURCING / EXPORT / IMPORT
          </div>
        </div>
      </motion.div>

      {/* Product Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative min-h-[18rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-[0_0_70px_rgba(34,211,238,0.22)] sm:min-h-[20rem]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${card.image})` }}
            />

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,3,10,0.02)_0%,rgba(1,3,10,0.24)_34%,rgba(1,3,10,0.9)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.18),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/14 to-transparent transition duration-1000 group-hover:translate-x-full" />

            {/* Icon */}
            <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-fuchsia-400/40 bg-black/45 shadow-[0_0_24px_rgba(168,85,247,0.35)] backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_36px_rgba(34,211,238,0.32)]">
              <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.18),transparent_50%)]" />
              <img
                src={card.icon}
                alt={card.title}
                className="relative h-20 w-20 object-contain transition duration-500 group-hover:scale-110 sm:h-20 sm:w-20"
              />
            </div>

            {/* Text Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="mb-4 h-px w-16 bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-500 group-hover:w-28" />

              <div className="text-2xl font-black leading-tight tracking-tight transition duration-500 group-hover:translate-x-1 sm:text-[1.75rem]">
                {card.title}
              </div>

              <div className="mt-2 text-base font-semibold tracking-[0.12em] text-white/68 transition duration-500 group-hover:text-cyan-100 sm:text-lg">
                {card.en}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative col-span-full mt-1 overflow-hidden rounded-[2rem] border border-fuchsia-400/20 bg-gradient-to-r from-[#09182a] via-[#0a1630] to-[#24143f] px-10 py-5 shadow-[0_0_40px_rgba(168,85,247,0.12)]"
>
  {/* Glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.15),transparent_24%),radial-gradient(circle_at_right,rgba(34,211,238,0.10),transparent_24%)]" />

  <div className="relative grid items-start gap-5 lg:grid-cols-[1fr_1.9fr] lg:items-center lg:gap-8">
    {/* Left */}
    <div className="flex items-center gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10">
        <Handshake className="h-7 w-7 text-fuchsia-300" />
      </div>

      <div>
        <h3 className="text-2xl font-black leading-snug text-white">
          その他商材についても
          <br />
          対応可能です
        </h3>
      </div>
    </div>

    {/* Right */}
    <div className="max-w-3xl border-l border-white/10 pl-8">
      <p className="text-lg leading-5.5 text-white/85">
        掲載商材以外についても、幅広くお取り扱いしております。
        <br />
        ご要望に応じて柔軟に対応いたしますので、
        まずはお気軽にご相談ください。
      </p>
        <p className="relative mt-1 max-w-[300px] text-base leading-5 text-white/60 sm:max-w-none">
          ※取り扱い商品は一例です。詳細はお問い合わせください。
        </p>
    </div>
  </div>


</motion.div>
    </motion.section>
    
  );
}