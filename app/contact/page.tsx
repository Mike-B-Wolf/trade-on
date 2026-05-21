import ContactHero from "../components/contact/01_ContactHero";
import ContactCards from "../components/contact/02_ContactCards";
import ContactForm from "../components/contact/03_ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030814] px-4 py-7 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
        >
          <span className="text-cyan-300">←</span>
          <span>BACK TO TOP</span>
        </a>

        {/* Contact Hero */}
        <section className="relative mt-2 overflow-hidden rounded-[1rem] border border-white/10 bg-[#07111f] shadow-2xl sm:mt-3 sm:rounded-[2rem]">
          <ContactHero />
          <ContactCards />
        </section>

        {/* Contact Form */}
        <section className="mt-5 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,32,0.96),rgba(4,10,22,0.98))] p-5 shadow-2xl sm:p-8 lg:p-10">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-[0.4em] text-fuchsia-300/80">
              FORM
            </div>

            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              お問い合わせフォーム
            </h2>

            <p className="mt-3 text-sm text-white/50">
              お問い合わせ内容に応じて、担当部署へ連携いたします。
            </p>
          </div>

          <ContactForm />
        </section>
      </div>
    </div>
  );
}