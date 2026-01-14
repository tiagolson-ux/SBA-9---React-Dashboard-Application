import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Note to self: Tailwind runs as a Vite plugin now (no CLI init needed)
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
