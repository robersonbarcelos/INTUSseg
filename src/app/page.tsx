import { Header, Hero, Logos, Pillars, Spacer, Method, Features, ImpactTrack, WinsTrack, StepsTrack, Testimonials, Proof, Cta, Footer, Overlays } from "@/components/sections";
import { SiteRuntime } from "@/components/SiteRuntime";

export default function Home() {
  return (
    <div className="page_wrapp">
      <Header />
      <main className="main_wrapp">
        <Hero />
        <Logos />
        <Pillars />
        <Spacer />
        <Method />
        <Features />
        <ImpactTrack />
        <WinsTrack />
        <StepsTrack />
        <Testimonials />
        <Proof />
        <Cta />
        <Footer />
      </main>
      <Overlays />
      <SiteRuntime />
    </div>
  );
}
