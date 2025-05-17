import { defineConfig } from 'vite'; 

export default defineConfig({
 base: '/Elearning-Responsive-Project/',
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});