import type { Metadata } from "next";
import { Header, Hero, Logos, Pillars, Spacer, Method, Features, ImpactTrack, WinsTrack, StepsTrack, Testimonials, Proof, Cta, Footer, Overlays } from "@/components/sections";
import { SiteRuntime } from "@/components/SiteRuntime";

// Versão de teste (Variação 1, Método): fora do Google. A versão final é a /v4.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

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
