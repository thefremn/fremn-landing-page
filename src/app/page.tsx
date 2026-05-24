import AnnouncementBanner from "@/components/custom/AnnouncementBanner";
import Navbar from "@/components/custom/navbar";
import HeroSection from "@/sections/hero/page";
import Features from "@/sections/features/page";
import HowItWorks from "@/sections/howItWorks/page";
import Testimonials from "@/sections/impact/testimonials";
import Pipeline from "@/sections/howItWorks/pipeline";
import ComparisonTable from "@/sections/comparison/page";
import Calculator from "@/sections/pricing/page";
import FAQ from "@/sections/faq/page";
import ContactSection from "@/sections/contact/page";
import Footer from "@/components/custom/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <AnnouncementBanner />
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pipeline />
        <ComparisonTable />
        <Calculator />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
