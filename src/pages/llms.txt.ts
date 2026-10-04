import { siteConfig } from '../data/siteConfig';
import content from '../data/content.json';
const strip = (s: string) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&ldquo;|&rdquo;/g, '"').replace(/&rarr;/g, '').replace(/\s+/g, ' ').trim();
export const GET = () => {
  const p = content.pages as Record<string, any>;
  const line = (slug: string) => `- [${strip(p[slug].h1)}](${siteConfig.origin}${slug === '/' ? '/' : `/${slug}/`}): ${strip(p[slug].desc)}`;
  const group = (title: string, slugs: string[]) => `## ${title}\n\n${slugs.map(line).join('\n')}\n`;
  const body = `# ${siteConfig.brand}

> ${strip(p['/'].desc)} Phone: ${siteConfig.phoneDisplay}. Service availability and pipe suitability are confirmed with a qualified professional. No service or result is guaranteed.

${group('Services', content.services.map((s: string[]) => s[1]))}
${group('Guides', content.guides.map((s: string[]) => s[1]))}
${content.hoods.length ? group('Service Areas', content.hoods.map((s: string[]) => s[1])) : ''}## Site

- [Home](${siteConfig.origin}/): ${strip(p['/'].desc)}
- [Privacy](${siteConfig.origin}/privacy/): Privacy policy
- [Terms](${siteConfig.origin}/terms/): Terms of use
- [Sitemap](${siteConfig.origin}/sitemap.xml)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
