import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      "process.env.PUBLIC_KEY": JSON.stringify(env.PUBLIC_KEY),
      "process.env.SERVICE_ID": JSON.stringify(env.SERVICE_ID),
      "process.env.TEMPLATE_ID": JSON.stringify(env.TEMPLATE_ID)
    },
    plugins: [react()],
  }
})