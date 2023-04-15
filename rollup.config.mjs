import typescript from "@rollup/plugin-typescript";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };

const keys = (p) => Object.keys(p || {});

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
    [...keys(pkg.dependencies), ...keys(pkg.devDependencies)].some((d) =>
      id.startsWith(d)
    ),
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: ".",
      declaration: true,
      exclude: ["src/**/*.spec.*"],
    }),
    getBabelOutputPlugin({
      plugins: ["@babel/plugin-transform-react-pure-annotations"],
    }),
    terser({
      ecma: 2015,
      module: true,
      compress: { passes: 3, unsafe: true, keep_fargs: false },
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
