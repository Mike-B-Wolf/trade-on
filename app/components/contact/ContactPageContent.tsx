import Link from "next/link";
import type { Dictionary, Locale } from "@/locales/types";
import ContactHero from "./01_ContactHero";
import ContactCards from "./02_ContactCards";
import ContactForm from "./03_ContactForm";

type ContactPageContentProps = {
  lang: Locale;
  dict: Dictionary["contactPage"];
};

export default function ContactPageContent({
  lang,
  dict,
}: ContactPageContentProps) {
  const topHref = lang === "ja" ? "/" : "/en";
  const jpClassName =
    lang === "ja"
      ? "text-amber-300 hover:text-amber-200"
      : "text-white/85 hover:text-white";
  const enClassName =
    lang === "en"
      ? "text-amber-300 hover:text-amber-200"
      : "text-white/85 hover:text-white";

  return (
    <div className="min-h-screen bg-[#030814] px-4 py-7 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={topHref}
            prefetch={false}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
          >
            <span className="text-cyan-300">←</span>
            <span>{dict.backToTop}</span>
          </Link>

          <div
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#050b18]/45 px-4 py-3 text-sm font-bold tracking-[0.12em] text-white/75 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/10"
            aria-label="Language selector"
          >
            <span className="hidden text-white/70 sm:inline">
              {dict.language}
            </span>
            <Link
              href="/contact"
              prefetch={false}
              className={`px-1.5 transition duration-300 ${jpClassName}`}
            >
              JP
            </Link>
            <span className="text-white/35" aria-hidden="true">
              /
            </span>
            <Link
              href="/en/contact"
              prefetch={false}
              className={`px-1.5 transition duration-300 ${enClassName}`}
            >
              EN
            </Link>
          </div>
        </div>

        {/* Contact Hero */}
        <section className="relative mt-2 overflow-hidden rounded-[1rem] border border-white/10 bg-[#07111f] shadow-2xl sm:mt-3 sm:rounded-[2rem]">
          <ContactHero dict={dict.hero} />
          <ContactCards dict={dict.cards} />
        </section>

        {/* Contact Form */}
        <section className="mt-5 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,32,0.96),rgba(4,10,22,0.98))] p-5 shadow-2xl sm:p-8 lg:p-10">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-[0.4em] text-fuchsia-300/80">
              {dict.formIntro.badge}
            </div>

            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              {dict.formIntro.title}
            </h2>

            <p className="mt-3 text-sm text-white/50">
              {dict.formIntro.description}
            </p>
          </div>

          <ContactForm lang={lang} dict={dict.form} />
        </section>
      </div>
    </div>
  );
}
