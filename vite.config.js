import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for assets when deployed to GitHub Pages under
  // https://<user>.github.io/wedidit/ — adjust if your repo name differs
  base: '/wedidit/',
  root: '.',
  publicDir: 'public',
  server: {
    open: true,
  },
});
