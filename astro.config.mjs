import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://wadsworthhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
