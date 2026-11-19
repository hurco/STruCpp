// Windows + core.autocrlf=true: vitest globalSetup cannot load
// scripts/rebuild-libs.mjs because its "#!/usr/bin/env node\r\n" shebang
// keeps the CR and vite-node does not strip it ("SyntaxError: Invalid or
// unexpected token"). Same configuration as vitest.config.ts without
// globalSetup; run `node scripts/rebuild-libs.mjs` first, then
// `npx vitest run --config vitest.win-local.config.ts`.
import { defineConfig, mergeConfig } from "vitest/config";
import base from "./vitest.config";

const merged = mergeConfig(base, defineConfig({}));
merged.test = { ...merged.test, globalSetup: [] };
export default merged;
