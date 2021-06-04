import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import inject from "./plugin-inject-react-pdf-shims";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [inject(), reactRefresh()],
  resolve: {
    alias: {
      stream: "stream-browserify",
      zlib: "browserify-zlib",
    },
  },
});
