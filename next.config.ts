import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" é para o Docker; na Vercel ele quebra o rastreamento de arquivos (ENOENT .nft.json)
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
