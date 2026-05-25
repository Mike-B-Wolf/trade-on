"use client";

import { useEffect, useState } from "react";
import { preload } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = ["/earth.webp", "/ship.webp", "/yama.webp"];
const heroRotationInterval = 4500;
const initialHeroRotationDelay = 15000;

export default function HeroSection() {
  preload(heroImages[0], { as: "image", fetchPriority: "high" });

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    const rotateHero = () => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    };

    const initialDelay = setTimeout(() => {
      rotateHero();
      interval = setInterval(rotateHero, heroRotationInterval);
    }, initialHeroRotationDelay);

    return () => {
      clearTimeout(initialDelay);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24 lg:min-h-[clamp(720px,82vh,860px)]">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroImages[currentHero]}
          initial={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-no-repeat bg-top bg-[length:100%_auto] sm:bg-cover sm:bg-center"
          style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
        />
      </AnimatePresence>

      {/* Luxury Glow Effects */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/20 blur-[100px]"
      />

      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 25, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[12%] left-[8%] h-[20rem] w-[20rem] rounded-full bg-cyan-400/18 blur-[100px]"
      />

      {/* Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.10),transparent_12%),radial-gradient(circle_at_75%_25%,rgba(138,92,246,0.18),transparent_24%),linear-gradient(90deg,rgba(1,4,18,0.97)_0%,rgba(1,4,18,0.92)_22%,rgba(1,4,18,0.68)_48%,rgba(1,4,18,0.36)_72%,rgba(1,4,18,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6),transparent_18%,transparent_78%,rgba(0,0,0,0.7))]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 pb-4 pt-6 sm:px-6 lg:min-h-[clamp(620px,72vh,760px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-10 lg:pb-16 lg:pt-12">
        <div className="flex items-start">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "28rem", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mr-6 hidden w-[3px] rounded-full bg-gradient-to-b from-fuchsia-500 via-cyan-400 to-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.5)] lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.05, delay: 0.25, ease: "easeOut" }}
            className="max-w-2xl pt-4 lg:pt-12"
          >
            <h1 className="text-[3.2rem] font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl xl:text-[6.3rem]">
              <motion.span
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.55 }}
                className="block whitespace-nowrap"
              >
                本物だけを、
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.75 }}
                className="block whitespace-nowrap bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(168,85,247,0.25)]"
              >
                世界へ
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-6 max-w-xl text-sm leading-8 text-white/82 sm:mt-8 sm:text-base md:text-lg md:leading-9"
            >
              合同会社TRADE-ONは、
              国内外をつなぐ貿易パートナーとして、
              日本の高品質な商品を世界へ届け、
              世界中の価値ある商品を日本へお届けしています。
              <br />
              <br />
              信頼と品質を大切に、
              柔軟かつ丁寧な取引をサポートいたします。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15 }}
              className="mt-8 flex flex-wrap gap-4 sm:mt-10"
            >
              <a
                href="#products"
                className="group relative overflow-hidden rounded-full border border-fuchsia-400/70 bg-black/25 px-6 py-3 text-sm font-bold shadow-[0_0_0_1px_rgba(59,130,246,0.35),0_0_40px_rgba(168,85,247,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] sm:px-8 sm:py-4 sm:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">取扱商品を見る →</span>
              </a>

              <a
                href="/contact"
                className="group relative overflow-hidden rounded-full border border-cyan-300/60 bg-white/[0.06] px-6 py-3 text-sm font-bold shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_40px_rgba(34,211,238,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(34,211,238,0.35)] sm:px-8 sm:py-4 sm:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">取引のご相談 →</span>
              </a>
            </motion.div>

            {/* Slider Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.35 }}
              className="mt-8 flex items-center gap-3 sm:mt-10"
            >
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHero(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentHero
                      ? "w-12 bg-white shadow-[0_0_18px_rgba(255,255,255,0.75)]"
                      : "w-2.5 bg-white/35 hover:bg-white/70"
                  }`}
                  aria-label={`hero-${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="hidden lg:block lg:min-h-[38rem]" />
      </div>
    </section>
  );
}
