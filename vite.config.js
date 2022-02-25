import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "public");

const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  plugins: [],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"), // home page route
        about: resolve(root, "about", "index.html"), // about page route
      },
    },
  },
});
