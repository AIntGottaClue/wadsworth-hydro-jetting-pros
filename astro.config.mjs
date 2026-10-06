import { defineConfig } from 'astro/config';
export default defineConfig({base:process.env.BASE ?? "/",
  site: 'https://wadsworthhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
