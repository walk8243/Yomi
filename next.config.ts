import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

const nextConfig = (phase: string, { defaultConfig }: { defaultConfig: NextConfig }): NextConfig => {
  const development: { output?: 'export' } = phase === PHASE_DEVELOPMENT_SERVER ? {} : {
    output: 'export',
  };

  return {
    ...defaultConfig,
    ...development,
    devIndicators: false,
    images: {
      unoptimized: true,
    },
  }
};

export default nextConfig;
