import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForP1ugin)],
});

const manifestForP1ugin = {
  registrationType: 'prompt',
  includeAssets: ['./public/favicon.ico', './public/apple-touch-icon.png'],
  manifest: {
    name: 'Diagnostic-lab for Doctor',
    short_name: 'Diagnostic-lab',
    description: 'Diagnostic-lab',
    icons: [
      {
        src: './public/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: './public/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: './public/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple-touch-icon  ',
      },
      {
        src: './public/manifest-icon-512.maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: './public/manifest-icon-192.maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    start_url: '/',
    lang: 'en-US',
    theme_color: '#9A0007',
    display: 'standalone',
  },
};
