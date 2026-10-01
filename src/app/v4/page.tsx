import type { Metadata } from "next";
import { Header, Hero4, ProofLine4, Logos, Pillars4, Identification4, Spacer, Method4, Features, ImpactTrack, WinsTrack, StepsTrack, Testimonials, Proof, Cta, Footer, Overlays } from "@/components/sections";
import { SiteRuntime } from "@/components/SiteRuntime";

// Versão paralela para comparação com a página principal (/): copy da Variação 4 (Integração).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V4() {
  return (
    <div className="page_wrapp">
      <Header />
      <main className="main_wrapp">
        <Hero4 />
        <ProofLine4 />
        <Logos />
        <Pillars4 />
        <Identification4 />
        <Spacer />
        <Method4 />
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
