"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto mt-8 max-w-7xl"
    >
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,39,61,0.96),rgba(23,34,54,0.96))] px-6 py-10 text-center shadow-[0_0_90px_rgba(34,211,238,0.10)] backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.18),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-black tracking-[0.3em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.14)]">
            CONTACT
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            お問い合わせ
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-white/72 sm:text-lg">
            商品やサービスに関するご質問やご相談がありましたら、お気軽にご連絡ください。
            <br className="hidden sm:block" />
            ご要望に合わせて、最適なご提案をいたします。
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="group relative inline-flex overflow-hidden rounded-full border border-cyan-300/40 bg-[linear-gradient(90deg,#d100ff_0%,#7b3cff_45%,#2563ff_100%)] px-9 py-4 text-base font-black text-white shadow-[0_0_45px_rgba(124,58,237,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(34,211,238,0.35)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative">メールで問い合わせる →</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}