import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "../../frontend/src"),
      "@shared": path.resolve(import.meta.dirname, "../../shared"),
      "@assets": path.resolve(import.meta.dirname, "../../frontend/src/assets"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "../../dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}); 