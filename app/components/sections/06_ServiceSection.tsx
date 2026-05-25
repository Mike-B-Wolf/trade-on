"use client";

import { motion } from "framer-motion";

export default function ServiceSection() {
  const services = [
    {
      tag: "SCENES",
      title: "日本の魅力を、世界の市場へ。",
      image: "/yama.webp",
      color: "cyan",
      text: (
        <>
          商品の品質だけでなく、
          <br />
          背景にある価値や想いまで丁寧に届ける。
          <br />
          <br />
          TRADE-ONは、
          <br />
          信頼される貿易パートナーを目指しています。
        </>
      ),
    },
    {
      tag: "GLOBAL",
      title: "国内外をつなぐ、確かな貿易体制。",
      image: "/ship.webp",
      color: "fuchsia",
      text: (
        <>
          仕入れ・品質確認・輸出入・商談まで、
          <br />
          一貫したサポート体制を構築。
          <br />
          <br />
          スピードと丁寧さを大切に、
          <br />
          安心してお取引いただける環境を整えています。
        </>
      ),
    },
  ];

  return (
    <section
      id="service"
      className="mx-auto mt-7 grid max-w-7xl gap-6 lg:grid-cols-2"
    >
      {services.map((service, index) => (
        <motion.article
          key={service.tag}
          initial={{ opacity: 0, y: 36, scale: 0.97, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: index * 0.12, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_0_80px_rgba(59,130,246,0.10)]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,3,10,0.9),rgba(1,3,10,0.42)_52%,rgba(1,3,10,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_34%)] opacity-70" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-60" />

          <div className="relative p-6 sm:p-8 md:p-10">
            <div
              className={`inline-flex rounded-full border px-4 py-2 text-xs font-black tracking-[0.28em] shadow-[0_0_30px_rgba(34,211,238,0.12)] ${
                service.color === "cyan"
                  ? "border-cyan-300/30 bg-cyan-400/10 text-cyan-200"
                  : "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200"
              }`}
            >
              {service.tag}
            </div>

            <h3 className="mt-5 max-w-xl text-2xl font-black leading-tight tracking-tight sm:text-4xl">
              {service.title}
            </h3>

            <div className="mt-5 h-px w-24 bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-transparent" />

            <p className="mt-5 max-w-lg text-sm leading-8 text-white/76 sm:text-lg">
              {service.text}
            </p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}
