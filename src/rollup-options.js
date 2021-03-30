const config = require("./load-config");

const ts = require("rollup-plugin-typescript2");
const bundleSizePlugin = require("rollup-plugin-bundle-size");
const { terser } = require("rollup-plugin-terser");
const { babel } = require("@rollup/plugin-babel");
const sourcemaps = require("rollup-plugin-sourcemaps");

module.exports = {
  inputOptions: {
    input: config.source ?? "src/index.ts",
    plugins: [
      ts({
        tsconfigDefaults: {
          exclude: ["dist", "node_modules"],
          include: ["src/**/*.ts"],
          compilerOptions: {
            declaration: true,
            declarationDir: config.typesDir ?? "dist/types",
          },
        },
        tsconfigOverride: {
          compilerOptions: {
            module: "ESNext",
            moduleResolution: "Node",
            target: "ESNext",
          },
        },
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
      bundleSizePlugin(),
      terser(),
      sourcemaps(),
      babel({
        babelHelpers: "runtime",
        exclude: ["node_modules/**"],
        extensions: [".ts"],
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            { corejs: 3, babelHelpers: true },
          ],
        ],
      }),
    ],
  },
  outputOptions: [
    {
      file: config.main,
      format: "cjs",
    },
    {
      name: config.name,
      file: config.unpkg,
      format: "umd",
    },
    {
      file: config.moduleLocation,
      format: "esm",
    },
    {
      file: config.mexports,
      format: "esm",
    },
  ],
};
