import Header from "./components/sections/01_Header";
import HeroSection from "./components/sections/02_HeroSection";
import StatsSection from "./components/sections/03_StatsSection";
import ProductsSection from "./components/sections/04_ProductsSection";
import FlowSection from "./components/sections/05_FlowSection";
import ServiceSection from "./components/sections/06_ServiceSection";
import ContactSection from "./components/sections/07_ContactSection";
import Footer from "./components/sections/08_Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#040b16] text-white">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <main className="relative z-10 mt-2 px-4 pb-20 sm:mt-0 sm:px-6 lg:px-10">
        <StatsSection />
        <ProductsSection />
        <FlowSection />
        <ServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}