import { Header, Hero, Logos, Pillars, Spacer, Features, ImpactTrack, WinsTrack, StepsTrack, Testimonials, Cta, Footer, Overlays } from "@/components/sections";
import { ZigRuntime } from "@/components/ZigRuntime";

export default function Home() {
  return (
    <div className="page_wrapp">
      <Header />
      <main className="main_wrapp">
        <Hero />
        <Logos />
        <Pillars />
        <Spacer />
        <Features />
        <ImpactTrack />
        <WinsTrack />
        <StepsTrack />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
      <Overlays />
      <ZigRuntime />
    </div>
  );
}
