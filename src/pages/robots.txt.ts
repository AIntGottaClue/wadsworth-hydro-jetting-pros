import { siteConfig } from '../data/siteConfig';
export const GET = () => new Response(`User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${siteConfig.origin}/sitemap.xml
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
