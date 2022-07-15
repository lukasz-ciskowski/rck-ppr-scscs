const { build } = require("esbuild");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const postCssPlugin = require("esbuild-style-plugin");

(async () => {
  const builder = await build({
    bundle: true,
    logLevel: "debug",
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    entryPoints: ["src/index.tsx"],
    incremental: true,
    minify: process.env.NODE_ENV === "production",
    outdir: "public/static",
    sourcemap: true,
    metafile: true,
    watch: true,
    loader: {
      '.otf': "dataurl",
    },
    plugins: [
      postCssPlugin({
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      }),
    ],
  });
  chokidar
    .watch("src/**/*.{ts,tsx}", {
      interval: 0,
    })
    .on("all", () => {
      builder.rebuild();
    });
  liveServer.start({
    open: true,
    port: +process.env.PORT || 8080,
    root: "public",
  });
})();
