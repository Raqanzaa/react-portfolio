import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import withMT from "@material-tailwind/html/utils/withMT";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact(), withMT({
    tailwindConfig: {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/html/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/html/utilities/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
      ],
      theme: {
        extend: {},
      },
      plugins: [
        require('flowbite/plugin'),
      ],
    },
  }), flowbiteReact()],
});