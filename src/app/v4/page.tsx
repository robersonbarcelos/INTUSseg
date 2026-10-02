import type { Metadata } from "next";
import { Header, Hero4, Logos, Pillars4, Identification4, Spacer, Method4, Features, ImpactTrack, WinsTrack, StepsTrack4, Testimonials, Proof, Cta, Footer, Overlays } from "@/components/sections";
import { SiteRuntime } from "@/components/SiteRuntime";

// Versão final (Variação 4, Integração): indexável pelo Google. A versão de teste (/) fica com noindex.
export const metadata: Metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "/v4" },
};

export default function V4() {
  return (
    <div className="page_wrapp">
      <Header />
      <main className="main_wrapp">
        <Hero4 />
        <Logos />
        <Pillars4 />
        <Identification4 />
        <Spacer />
        <Method4 />
        <Features />
        <ImpactTrack />
        <WinsTrack />
        <StepsTrack4 />
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
