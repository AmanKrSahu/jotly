import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import { CTASection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesGrid } from "@/components/home/features-grid";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
