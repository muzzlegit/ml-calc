import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ml-calc/",
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/1-app/",
      widgets: "/src/2-widgets/",
      modules: "/src/3-modules/",
      utils: "/src/4-utils/",
      eventBus: "/src/5-eventBus/",
    },
  },
});
