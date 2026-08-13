import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,

  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/sass")],
    additionalData: `@use "main.sass" as *;`,
  },
};

export default nextConfig;
