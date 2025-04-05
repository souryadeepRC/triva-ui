import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// PostCSS Plugins
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import nested from "postcss-nested";
import autoprefixer from "autoprefixer";

const packageJson = require("./package.json");
const configDirectory = path.dirname(__filename);

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        plugins: [autoprefixer(), nested(), cssnano()],
        extensions: [".css"],
        minimize: true,
        modules: false,
      }),
      resolve(),
      commonjs(),
      replace({
        "'use client';": "",
        delimiters: ["", ""],
        include: path.resolve(configDirectory, "node_modules/@mui/**/**/*.js"),
        preventAssignment: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    treeshake: true,
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
