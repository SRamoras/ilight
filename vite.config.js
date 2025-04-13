import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ilight/', // altere para o nome do seu repositório
  plugins: [react()]
})
