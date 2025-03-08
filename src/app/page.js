import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import IntroSection from "@/components/home/IntroSection";
import ProductInfo from "@/components/home/ProductInfo";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <IntroSection />
      <HowItWorks />
      <ProductInfo />
      <CTASection />
    </div>
  );
}
