"use client";

import { motion } from "framer-motion";

const cards = [
  {
    en: "GLOBAL",
    title: "国内外の取引相談",
    text: "輸出入・仕入れ・販売ルートに関するご相談",
  },
  {
    en: "QUALITY",
    title: "品質・商品確認",
    text: "車両・食品・日用品などの商品確認に対応",
  },
  {
    en: "SUPPORT",
    title: "担当者対応",
    text: "内容確認後、担当者より順次ご連絡",
  },
];

export default function ContactCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative mx-auto grid max-w-5xl gap-4 px-4 pb-5 sm:grid-cols-3 sm:px-10"
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.en}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: index * 0.08,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.92),rgba(8,14,26,0.82))] px-5 py-2 shadow-[0_0_45px_rgba(34,211,238,0.05)] backdrop-blur-xl"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_34%)]" />

          {/* Top Accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

          {/* English Label */}
          <div className="relative text-[10px] font-black tracking-[0.32em] text-cyan-200/80">
            {card.en}
          </div>

          {/* Title */}
          <div className="relative mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">
            {card.title}
          </div>

          {/* Accent Line */}
          <div className="relative mt-4 h-px w-14 bg-gradient-to-r from-cyan-300 to-fuchsia-400" />

          {/* Description */}
          <p className="relative mt-4 text-sm leading-7 text-white/64">
            {card.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}