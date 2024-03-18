/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@vite-app/', replacement: `${import.meta.dirname}/src/` },
    ],
  },

  plugins: [react()],

  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],
    // スナップショットの保存先を設定
    resolveSnapshotPath: (path, extension) => {
      return path.replace("/src/", "/__snapshots__/") + extension;
    },
  },
})
