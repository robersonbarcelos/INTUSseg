import type { Metadata } from "next";
import "./site.css";
import "./intuseg.css";

const DESC =
  "Mapeamos os processos da sua corretora, achamos os gargalos e construímos a automação sobre os sistemas que você já usa. Ganho medido em horas.";
const TITLE = "INTUSeg | Automação de processos com IA para corretoras";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  icons: { icon: "/assets/intuseg-favicon.svg" },
  openGraph: { title: TITLE, description: DESC, type: "website", locale: "pt_BR" },
  twitter: { card: "summary", title: TITLE, description: DESC },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-wf-domain="zig.ai"
      data-wf-page="697c82adb518a76f62a4fde0"
      data-wf-site="692db0eaf3c473ac91a06392"
      className="w-mod-js"
      suppressHydrationWarning
    >
      <body data-w-id="697c82adb518a76f62a4fde6" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
