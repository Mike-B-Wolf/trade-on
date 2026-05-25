"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <>
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/earth-contact.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,20,0.58),rgba(3,8,20,0.92)),radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(217,70,239,0.16),transparent_30%)]" />

      {/* Top Luxury Line */}
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />

      {/* PC Logo */}
      <motion.div
        initial={{ opacity: 0, y: -14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="absolute left-10 top-8 z-10 hidden sm:block sm:left-14 sm:top-10"
      >
        <Image
          src="/company.png"
          alt="TRADE-ON"
          width={1536}
          height={1024}
          priority
          className="h-36 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.22)]"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
        className="relative px-4 py-8 text-center sm:px-10 sm:py-12 lg:px-16"
      >
        {/* Mobile Logo + Label */}
        <div className="relative mx-auto flex w-fit items-center justify-center">
          <Image
          src="/company.png"
          alt="TRADE-ON"
          width={1536}
          height={1024}
          priority
          className="absolute right-full top-1/2 mr-3 h-28 scale-150 -translate-y-1/2 object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.24)] sm:hidden"
        />

          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-black tracking-[0.36em] text-cyan-200 backdrop-blur">
            CONTACT
          </div>
        </div>

        <h1 className="mt-5 text-4xl font-black tracking-wide sm:text-6xl">
          お問い合わせ
        </h1>

        <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300 to-fuchsia-400" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/74 sm:text-base">
          商品・お取引・輸出入に関するご相談を承ります。
          <br />
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
      </motion.div>
    </>
  );
}
