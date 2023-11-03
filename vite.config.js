import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Agrega tu configuración personalizada
const customConfig = {
  esbuild: {
    jsxFactory: 'h',        // Personaliza la función utilizada para JSX
    jsxFragment: 'Fragment' // Personaliza el elemento utilizado para JSX Fragment
  }
};

// Combinar la configuración personalizada con la configuración del plugin de React
export default defineConfig({
  ...customConfig, // Agrega la configuración personalizada
  plugins: [react()],
});
