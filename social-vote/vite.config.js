import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'social-media-vote-tracker' with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/social-media-vote-tracker/',
})
