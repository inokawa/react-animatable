import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  external: (id) =>
    [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.devDependencies),
    ].some((d) => id.startsWith(d)),
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: ".",
      declaration: true,
      exclude: ["src/**/*.spec.*"],
    }),
    terser({
      ecma: 2015,
      module: true,
      compress: { passes: 3, unsafe: true },
      mangle: { properties: { regex: "^_" } },
      format: {
        // https://github.com/terser/terser/pull/550
        // https://github.com/terser/terser/issues/968
        comments: /@preserve|@lic|@cc_on|^\**!|__PURE__/i,
        preserve_annotations: true,
      },
    }),
  ],
};
