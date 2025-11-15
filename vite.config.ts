import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Estimula/',  // 👈 Nombre EXACTO del repo (con mayúscula E)
  plugins: [react()],
})
