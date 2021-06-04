import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // inject({
    //   Buffer: "buffer",
    //   EventEmitter: "events",
    // }),
  ],
  resolve: {
    alias: {
      crypto: "node_modules/crypto-browserify/index.js",
      stream: "node_modules/stream-browserify/index.js",
      zlib: "browserify-zlib",
    },
  },
});
