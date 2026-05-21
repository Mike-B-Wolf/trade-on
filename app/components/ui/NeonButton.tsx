"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";

type NeonButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  loading?: boolean;
};

export default function NeonButton({
  children,
  loading = false,
  disabled,
  className = "",
  ...props
}: NeonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      disabled={disabled || loading}
      className={`group relative w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-6 py-5 text-lg font-bold text-white shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.45)] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}