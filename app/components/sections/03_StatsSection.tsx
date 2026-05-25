"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Company Stats
const stats = [
  { label: "取引国", value: "10", suffix: "カ国以上", icon: "/icon-global.png" },
  { label: "年間取引件数", value: "100", suffix: "件以上", icon: "/icon-growth.png" },
  { label: "顧客満足度", value: "98%", suffix: "以上", icon: "/icon-star.png" },
  { label: "取扱商品数", value: "300", suffix: "種類以上", icon: "/icon-bag.png" },
];

export default function StatsSection() {
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
        {stats.map((item, index) => (
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
                src={item.icon}
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
