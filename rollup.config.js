import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
const babelToES5Plugins = [
  "@babel/plugin-transform-literals",
  "@babel/plugin-transform-arrow-functions",
  "@babel/plugin-transform-block-scoped-functions",
  "@babel/plugin-transform-shorthand-properties",
  "@babel/plugin-transform-computed-properties",
  ["@babel/plugin-transform-block-scoping", { throwIfClosureRequired: true }],
];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
        plugins: [...babelToES5Plugins],
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];
