import BodyContent from "@/components/BodyContent";
import ClientOnly from "@/components/ClientOnly";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <HeroSection />
        <HowItWorks />
      </ClientOnly>
    </div>
  );
}
