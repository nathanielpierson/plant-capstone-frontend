import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
