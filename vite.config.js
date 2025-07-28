import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-website/',
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@chakra-ui/react', 
      '@chakra-ui/theme-tools',
      '@emotion/react', 
      '@emotion/styled',
    ],
  },
})