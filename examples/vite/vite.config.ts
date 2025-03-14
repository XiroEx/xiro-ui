import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // generates 'manifest.webmanifest' file on build
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Simplifying Progressive Web App (PWA) Development with Vite: A Beginners Guide',
        short_name: 'PWA Guide',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: 'purple',
        icons: [
          {
            src: '/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // defining cached files formats
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      }
    })
  ],
})
