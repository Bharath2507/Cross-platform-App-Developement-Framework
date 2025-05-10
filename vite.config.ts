import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your GitHub repo name
const repoName = 'Cross-platform-App-Developement-Framework';

export default defineConfig({
  base: `/${repoName}/`, // 👈 Important for GitHub Pages
  plugins: [react()],
});
