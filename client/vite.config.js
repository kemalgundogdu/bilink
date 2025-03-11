import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
// tailwind css with tailwind.config.js
  plugins: [react(), tailwindcss("./tailwind.config.js")],
});
