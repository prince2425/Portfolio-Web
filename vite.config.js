import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   assetsInclude: ['**/*.docx']
// })

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  assetsInclude: ['**/*.docx']
})
