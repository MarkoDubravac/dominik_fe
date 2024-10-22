import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://193.22.147.241:8080", // Your backend API
        changeOrigin: true, // Makes the proxy handle the CORS issue
        rewrite: (path) => path.replace(/^\/api/, ""), // Strips the /api prefix from the request
      },
    },
  },
});
