import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "story-book",
      fileName: "story-book",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
