import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eyerfvbqiujvqmcytnee.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZXJmdmJxaXVqdnFtY3l0bmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwODgzODAsImV4cCI6MjA5ODY2NDM4MH0.IxI6EBikem9qHyRQOmlmDjTiicAvSyiaZZI-b-r5TIg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SITE_URL = 'https://fivedimensions.in';

async function generate() {
  console.log('Generating sitemap.xml and robots.txt...');

  const staticPages = [
    '',
    '/opportunities',
    '/insights',
    '/llms.txt',
    '/pricing.md',
  ];

  // Fetch dynamic opportunities from Supabase
  let dynamicUrls = [];
  try {
    const { data, error } = await supabase.from('opportunities').select('id');
    if (error) throw error;
    dynamicUrls = data.map(item => `/opportunities/${item.id}`);
    console.log(`Fetched ${dynamicUrls.length} dynamic opportunity URLs from Supabase.`);
  } catch (err) {
    console.error('Error fetching opportunities from Supabase. Falling back to static pages only:', err);
  }

  const allUrls = [...staticPages, ...dynamicUrls];

  // Build XML sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/opportunities/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Build robots.txt
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  // Write files to the public directory
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

  console.log('Successfully generated sitemap.xml and robots.txt in public/ directory!');
}

generate();
