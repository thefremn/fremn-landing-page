import { AccentBar } from "@/components/custom/AccentBar";
import Navbar from "@/components/custom/navbar";
import HeroSection from "@/sections/hero/page";
import TrustBar from "@/sections/hero/trustBar";
import Features from "@/sections/features/page";
import HowItWorks from "@/sections/howItWorks/page";
import ChannelShowcase from "@/sections/features/multiChannel";
import Testimonials from "@/sections/impact/testimonials";
import Infographics from "@/sections/impact/infographics";
import ComparisonTable from "@/sections/comparison/page";
import FAQ from "@/sections/faq/page";
import ContactSection from "@/sections/contact/page";
import Footer from "@/components/custom/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <AccentBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <Features />
        <HowItWorks />
        <ChannelShowcase />
        <Testimonials />
        <Infographics />
        <ComparisonTable />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <AccentBar />
    </div>
  );
}
