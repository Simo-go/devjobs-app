import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint2";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint({ build: true }), svgr(), tailwindcss()],
});
