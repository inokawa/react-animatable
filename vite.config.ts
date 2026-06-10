import pkg from "./package.json" with { type: "json" };
import { basename } from "node:path";
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

const keys = (p: Record<string, string> | undefined) => Object.keys(p || {});

export default defineConfig({
  build: {
    outDir: './lib',
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: (f) => basename(f === 'es' ? pkg.module : pkg.main),
    },
    rolldownOptions: {
      external: (id) =>
        [...keys((pkg as any).dependencies), ...keys(pkg.devDependencies)].some((d) =>
          id.startsWith(d)
        ),
      output: { postBanner: '"use client";\n' }
    },
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      ecma: 2015,
      module: true,
      compress: { passes: 5, unsafe: true, keep_fargs: false },
      mangle: { properties: { regex: "^_" } },
      format: {
        preserve_annotations: true,
      },
    }
  },
  plugins: [dts({ exclude: ["**/*.{spec,stories}.*"], })],
});

