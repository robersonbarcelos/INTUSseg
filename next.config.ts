import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" é para o Docker; na Vercel ele quebra o rastreamento de arquivos (ENOENT .nft.json)
  output: process.env.VERCEL ? undefined : "standalone",
  // Apelidos para as duas versões: /index e /indexv4 abrem a mesma coisa que / e /v4
  async rewrites() {
    return [
      { source: "/index", destination: "/" },
      { source: "/indexv4", destination: "/v4" },
    ];
  },
};

export default nextConfig;
