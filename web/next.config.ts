import type { NextConfig } from "next";
import { config } from "dotenv";
import { resolve } from "node:path";

config({ path: "../.env" });

const nextConfig: NextConfig = { turbopack: { root: resolve(process.cwd(), "..") }, agentRules: false };
export default nextConfig;
