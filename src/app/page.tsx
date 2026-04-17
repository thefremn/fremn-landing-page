import Navbar from "@/components/custom/navbar";
import HeroSection from "@/sections/hero/page";
import TrustBar from "@/sections/hero/trustBar";
import ProblemSolution from "@/sections/product/page";
import HowItWorks from "@/sections/howItWorks/page";
import Features from "@/sections/features/page";
import ContactSection from "@/sections/contact/page";
import Footer from "@/components/custom/footer";
import ChannelShowcase from "@/sections/features/multiChannel";
import Testimonials from "@/sections/impact/testimonials";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(ellipse at 20% 0%, rgba(30, 107, 255, 0.04) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 0%, rgba(91, 192, 235, 0.03) 0%, transparent 50%),
          #0A0A0A
        `,
      }}
    >
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <ChannelShowcase />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}