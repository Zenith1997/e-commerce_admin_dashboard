import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ----------------------------------------------------------------------


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/e-commerce_admin_dashboard/'
})