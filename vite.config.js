import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import './src/Components/Firebase/Config.jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
