import type { Metadata } from "next";
import "./zig.css";

const DESC =
  "Sales intelligence & execution platform for B2B teams. ZIg eliminates sales admin by handling busywork, so humans close deals.";
const TITLE = "The AI engine that keeps your entire sales motion moving | zig.ai";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  icons: { icon: "/zig/ico-32.png", apple: "/zig/ico-256.png" },
  openGraph: { title: TITLE, description: DESC, type: "website", images: ["/zig/zig-OG.jpg"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
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
