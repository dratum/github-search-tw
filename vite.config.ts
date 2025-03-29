import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
  },
  optimizeDeps: {
    include: ["some-package"],
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@entities": path.resolve(__dirname, "src/entities"),
    },
  },
});
