/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const mockClassPath = './src/utilities/mockfiles/ArcGisCoreClassMocks.js';
const classesToMock = [
  '@arcgis/core/views/MapView',
  '@arcgis/core/widgets/ScaleBar',
  '@arcgis/core/widgets/Compass',
  '@arcgis/core/widgets/Home',
];

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    alias: Object.fromEntries(classesToMock.map((path) => [path, mockClassPath])),
  },
});
