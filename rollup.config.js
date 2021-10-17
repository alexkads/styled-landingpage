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

const dist = "dist";
const production = process.env.ROLLUP_WATCH;

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: `${dist}/cjs/index.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${dist}/esm/index.js`,
        format: "esm",
        sourcemap: true,
      },
      {
        name: "StyledLandingPage",
        file: `${dist}/umd/index.js`,
        globals: {
          react: "React",
        },
        format: "umd",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
      }),
      resolve(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
        plugins: [...babelToES5Plugins],
      }),
      external(),
      commonjs(),
      production && terser(),
    ],
  },
];
