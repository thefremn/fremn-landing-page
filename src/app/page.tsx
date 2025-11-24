import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contacts";
import Hero from "@/sections/hero";
import ProductSection from "@/sections/products";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
