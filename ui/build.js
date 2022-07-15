const esbuild = require("esbuild");
const copyStaticFiles = require("esbuild-copy-static-files");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const path = require("path")

esbuild.build({
  entryPoints: ["./src/index.tsx"],
  outdir: "./build/static",
  bundle: true,
  minify: true,
  sourcemap: false,
  watch: false,
  plugins: [
    copyStaticFiles({
      src: "./public",
      dest: "./build",
      dereference: true,
      errorOnExist: false,
      preserveTimestamps: true,
      recursive: true,
    }),
    sassPlugin({
      async transform(source) {
        const { css } = await postcss(
          autoprefixer,
          tailwindcss(path.resolve(__dirname, "./tailwind.config.js"))
        ).process(source);
        return css;
      },
    }),
  ],
});
