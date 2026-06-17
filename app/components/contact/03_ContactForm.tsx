"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactTurnstile from "./04_ContactTurnstile";
import ContactSubmitButton from "./05_ContactSubmitButton";
import FadeUp from "../ui/FadeUp";
import type { Dictionary, Locale } from "@/locales/types";

declare global {
  interface Window {
    onTurnstileSuccess: (token: string) => void;
    onTurnstileExpired: () => void;
  }
}

type ContactFormProps = {
  lang: Locale;
  dict: Dictionary["contactPage"]["form"];
};

export default function ContactForm({ lang, dict }: ContactFormProps) {
  const categories = dict.categories;
  const [turnstileToken, setTurnstileToken] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [turnstileVerified, setTurnstileVerified] = useState(false);

  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);

      setTimeout(() => {
        setTurnstileVerified(true);
      }, 3000);
    };

    window.onTurnstileExpired = () => {
      setTurnstileToken("");
      setTurnstileVerified(false);
    };
  }, []);

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [success]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = dict.errors.nameRequired;
    }

    if (!form.email.trim()) {
      newErrors.email = dict.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = dict.errors.emailInvalid;
    }

    if (!form.message.trim()) {
      newErrors.message = dict.errors.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (!turnstileToken) {
      alert(dict.errors.turnstileRequired);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          lang,
          category: selectedCategory,
          turnstileToken,
        }),
      });

      const data = await res.json().catch(() => null);

      const responseSummary = {
        ok: res.ok,
        status: res.status,
        statusText: res.statusText,
        bodyMessage: data?.message ?? null,
        bodyOk: data?.ok ?? null,
      };

      if (!res.ok || data?.ok === false) {
        console.error("CONTACT FORM RESPONSE ERROR", responseSummary);
        throw new Error(data?.message || dict.errors.submitFailed);
      }

      console.debug("CONTACT FORM RESPONSE SUCCESS", responseSummary);
      setSuccess(true);
      setForm({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedCategory(categories[0].key);
      setErrors({});
      setTurnstileToken("");
      setTurnstileVerified(false);
    } catch (error) {
      console.error("CONTACT FORM SUBMIT ERROR", error);
      alert(
        error instanceof Error
          ? error.message
          : dict.errors.submitFailedRetry
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full rounded-2xl border bg-[#07101f]/85 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/28 ${
      hasError
        ? "border-red-400/70 shadow-[0_0_26px_rgba(248,113,113,0.16)]"
        : "border-white/10 focus:border-cyan-300/55 focus:bg-[#09172b] focus:shadow-[0_0_34px_rgba(34,211,238,0.14)]"
    }`;

  return (
    <form noValidate onSubmit={handleSubmit} className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

      <div className="relative">
        <div className="mb-5">
          <div className="text-[10px] font-black tracking-[0.32em] text-cyan-200/70">
            {dict.categoryBadge}
          </div>

          <div className="mt-2 text-lg font-black tracking-tight text-white sm:text-xl">
            {dict.categoryTitle}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-7">
          {categories.map((item) => {
            const active = selectedCategory === item.key;

            return (
              <motion.button
                key={item.key}
                type="button"
                onClick={() => setSelectedCategory(item.key)}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className={`group relative overflow-hidden rounded-[1.35rem] border px-3 py-4 text-center transition-all duration-300 ${
                  active
                    ? "border-fuchsia-300/65 bg-fuchsia-500/14 shadow-[0_0_34px_rgba(168,85,247,0.24)]"
                    : "border-white/10 bg-white/[0.035] hover:border-cyan-300/45 hover:bg-white/[0.06] hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_52%)]" />

                <div className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-[130%]" />

                <div
                  className={`relative mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border text-[9px] font-black tracking-[0.18em] ${
                    active
                      ? "border-fuchsia-300/70 bg-fuchsia-500/20 text-white"
                      : "border-cyan-300/35 bg-cyan-400/10 text-cyan-200/80"
                  }`}
                >
                  {item.code}
                </div>

                <div className="relative mt-3 text-xs font-bold text-white/84 sm:text-sm">
                  {item.label}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-9 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-white/82">
              {dict.fields.company.label}
            </label>

            <input
              type="text"
              name="company"
              value={form.company}
              maxLength={100}
              onChange={handleChange}
              className={inputClass()}
              placeholder={dict.fields.company.placeholder}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/82">
              {dict.fields.name.label}{" "}
              <span className="text-fuchsia-300">*</span>
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              maxLength={50}
              onChange={handleChange}
              className={inputClass(!!errors.name)}
              placeholder={dict.fields.name.placeholder}
            />

            {errors.name && (
              <p className="mt-2 text-xs font-bold text-red-300">
                {errors.name}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-white/82">
              {dict.fields.email.label}{" "}
              <span className="text-fuchsia-300">*</span>
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              maxLength={100}
              onChange={handleChange}
              className={inputClass(!!errors.email)}
              placeholder={dict.fields.email.placeholder}
            />

            {errors.email && (
              <p className="mt-2 text-xs font-bold text-red-300">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/82">
              {dict.fields.phone.label}
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              maxLength={30}
              onChange={handleChange}
              className={inputClass()}
              placeholder={dict.fields.phone.placeholder}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-white/82">
            {dict.fields.message.label}{" "}
            <span className="text-fuchsia-300">*</span>
          </label>

          <textarea
            name="message"
            value={form.message}
            maxLength={3000}
            onChange={handleChange}
            rows={6}
            className={`${inputClass(!!errors.message)} resize-none leading-7`}
            placeholder={dict.fields.message.placeholder}
          />

          {errors.message && (
            <p className="mt-2 text-xs font-bold text-red-300">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-500/[0.045] px-5 py-4 text-sm leading-7 text-white/72 shadow-[0_0_32px_rgba(217,70,239,0.08)]">
        {dict.noticeLines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      <div className="relative mt-14">
        <AnimatePresence initial={false}>
          {!turnstileVerified && (
            <FadeUp className="pointer-events-auto absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[85%]">
              <ContactTurnstile visible={!turnstileVerified} />
            </FadeUp>
          )}
        </AnimatePresence>

        <ContactSubmitButton
          loading={loading}
          label={dict.submit}
          loadingLabel={dict.submitting}
        />

        <div className="mt-6 text-center text-xs leading-6 text-white/34">
          {dict.privacy}
        </div>
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/70 px-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#07111f]/95 px-8 py-7 text-center text-white shadow-[0_0_80px_rgba(168,85,247,0.25)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.16),transparent_56%)]" />

              <div className="relative">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-fuchsia-300" />
                <div className="mt-5 text-lg font-black">
                  {dict.loadingTitle}
                </div>
                <div className="mt-2 text-sm text-white/60">
                  {dict.loadingText}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-[#020617]/70 backdrop-blur-md" />
            <div className="absolute h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-[90px]" />
            <div className="absolute h-[360px] w-[360px] rounded-full bg-fuchsia-500/10 blur-[80px]" />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-[460px] overflow-hidden rounded-[2.25rem] border border-white/15 bg-[#07111f]/92 p-8 text-white shadow-[0_0_120px_rgba(16,185,129,0.28)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_55%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

              <div className="relative">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/10 shadow-[0_0_55px_rgba(16,185,129,0.45)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-300 text-4xl font-black text-[#04111d] shadow-[0_0_35px_rgba(110,231,183,0.75)]">
                    ✓
                  </div>
                </div>

                <div className="mt-7 text-center text-[11px] font-bold tracking-[0.35em] text-emerald-300/80">
                  {dict.successBadge}
                </div>

                <div className="mt-3 text-center text-3xl font-black tracking-wide">
                  {dict.successTitle}
                </div>

                <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />

                <div className="mt-5 text-center text-sm leading-7 text-white/75">
                  {dict.successBodyLines.map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <div className="flex items-center justify-between text-xs text-white/45">
                    <span>{dict.successCompany}</span>
                    <span>{dict.successStatus}</span>
                  </div>

                  <div className="mt-3 h-[4px] overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full origin-left animate-[shrink_3.5s_linear_forwards] rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300" />
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes shrink {
                  from {
                    transform: scaleX(1);
                  }
                  to {
                    transform: scaleX(0);
                  }
                }
              `}</style>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
