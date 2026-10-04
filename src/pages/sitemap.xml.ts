import { siteConfig } from '../data/siteConfig';
import content from '../data/content.json';
export const GET = () => {
  const urls = Object.keys(content.pages).map((s) => `  <url><loc>${siteConfig.origin}${s === '/' ? '/' : `/${s}/`}</loc><lastmod>${siteConfig.lastModified}</lastmod></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
