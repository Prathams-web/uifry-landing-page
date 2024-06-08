import Advantages1 from "@/components/Advantages1";
import Advantages2 from "@/components/Advantages2";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center min-h-screen w-full"
      style={{ backgroundImage: "url('/assets/images/background.svg')" }}
    >
      <HeroSection/>
      <Features/>
      <Advantages1/>
      <Advantages2/>
      {/* <SampleComponent /> */}
      <Testimonial />
      <FAQ />
      <div className="p-20"><GetStarted /></div>
      
    </main>
  );
}