import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://adnan056.github.io/AirBnb-Clone/",
  plugins: [react()],
})
