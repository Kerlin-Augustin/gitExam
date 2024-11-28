import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { // Add this section for Vitest configuration
    globals: true,         // Enables global test functions like 'describe', 'it'
    environment: 'jsdom',  // Sets up a DOM-like environment for testing React components
    setupFiles: './src/test/setup.ts', // Optional: Path to test setup file for global mocks, etc.
  },
});
