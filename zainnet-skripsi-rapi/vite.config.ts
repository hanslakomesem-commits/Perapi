import { defineConfig } from 'vite';

// Relative base makes the same build work on:
// - https://username.github.io/
// - https://username.github.io/repository-name/
// without hard-coding the repository name.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
