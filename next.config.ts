import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,

  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/sass")],
    additionalData: `@use "main" as *\n`,
  },
};

export default nextConfig;
