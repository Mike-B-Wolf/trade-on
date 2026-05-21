"use client";

import { motion } from "framer-motion";

const flowSteps = [
  "お問い合わせ",
  "ご要望ヒアリング",
  "お見積ご提案",
  "輸出入 開始",
  "アフターサポート",
];

export default function FlowSection() {
  return (
    <motion.section
      id="flow"
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mt-8 max-w-7xl"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#07101f_0%,#081428_100%)] px-6 py-8 shadow-[0_0_60px_rgba(168,85,247,0.08)] sm:px-8 lg:px-10">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />

        {/* Top Line */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/45 to-transparent" />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          <div className="inline-flex rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-4 py-1.5 text-[10px] font-black tracking-[0.28em] text-fuchsia-200">
            FLOW
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            ご利用の流れ
          </h2>

          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-transparent" />
        </motion.div>

        {/* Flow */}
        <div className="relative mt-8 grid gap-6 md:mt-10 md:grid-cols-5 md:gap-4">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Arrow PC only */}
              {index !== flowSteps.length - 1 && (
                <div className="absolute left-1/2 top-7 hidden w-full -translate-y-1/2 lg:block">
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-light text-cyan-200/55">
                      →
                    </span>
                  </div>
                </div>
              )}

              {/* Number */}
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-fuchsia-400/35 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.5),rgba(139,92,246,0.82))] text-lg font-black text-white shadow-[0_0_24px_rgba(124,58,237,0.28)]">
                {index + 1}
              </div>

              {/* Text */}
              <div className="mt-4 text-sm font-bold text-white/92 sm:text-base">
                {step}
              </div>

              {/* Caption */}
              <div className="mt-2 text-[10px] font-black tracking-[0.24em] text-white/60">
                STEP 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}