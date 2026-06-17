"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/locales/types";

const statIcons = [
  "/icon-global.png",
  "/icon-growth.png",
  "/icon-star.png",
  "/icon-bag.png",
];

type StatsSectionProps = {
  dict: Dictionary["stats"];
};

export default function StatsSection({ dict }: StatsSectionProps) {
  return (
    <motion.section
      id="strength"
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#07101f]/72 px-6 py-6 shadow-[0_0_60px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:px-8"
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {dict.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/35 bg-black/35 shadow-[0_0_35px_rgba(139,92,246,0.22)] backdrop-blur sm:h-24 sm:w-24">
              <Image
                src={statIcons[index]}
                alt={item.label}
                width={96}
                height={96}
                className="h-auto w-20 object-contain sm:w-24"
              />
            </div>

            {/* Text */}
            <div>
              <div className="text-xs font-semibold tracking-[0.14em] text-white/52 sm:text-sm">
                {item.label}
              </div>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-black leading-none text-white sm:text-5xl">
                  {item.value}
                </span>

                <span className="pb-1 text-xs font-semibold text-white/58 sm:text-sm">
                  {item.suffix}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
