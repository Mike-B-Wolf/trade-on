import type { Dictionary, Locale } from "@/locales/types";
import Header from "./sections/01_Header";
import HeroSection from "./sections/02_HeroSection";
import StatsSection from "./sections/03_StatsSection";
import ProductsSection from "./sections/04_ProductsSection";
import FlowSection from "./sections/05_FlowSection";
import ServiceSection from "./sections/06_ServiceSection";
import ContactSection from "./sections/07_ContactSection";
import GroupLinksSection from "./sections/08_GroupLinksSection";
import Footer from "./sections/09_Footer";

type HomePageProps = {
  lang: Locale;
  dict: Dictionary;
};

export default function HomePage({ lang, dict }: HomePageProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#040b16] text-white">
      <Header lang={lang} dict={dict.header} />
      <HeroSection lang={lang} dict={dict.hero} />

      {/* Main Content */}
      <main className="relative z-10 mt-2 px-4 pb-3 sm:mt-0 sm:px-6 lg:px-10">
        <StatsSection dict={dict.stats} />
        <ProductsSection dict={dict.products} />
        <FlowSection dict={dict.flow} />
        <ServiceSection dict={dict.service} />
        <ContactSection dict={dict.contactCta} />
        <GroupLinksSection dict={dict.groupLinks} />
        <Footer dict={dict.footer} />
      </main>
    </div>
  );
}
