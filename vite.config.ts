import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "https://libra-be-lms.onrender.com",
        changeOrigin: true,
        secure: false, // If the target is using https, set this to false to avoid SSL errors
      },
    },
  },
});
