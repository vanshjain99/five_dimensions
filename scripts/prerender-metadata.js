import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

const PAGE_METADATA = {
  opportunities: {
    title: 'Investment-Grade Real Estate Opportunities | Five Dimensions',
    description: 'Browse pre-vetted commercial and residential real estate listings in Delhi NCR. Every property passes our rigorous 47-point legal and financial due diligence audit.',
    url: 'https://fivedimensions.in/opportunities',
  },
  insights: {
    title: 'Market Insights & Intelligence | Five Dimensions',
    description: 'Stay ahead of the real estate market. Read research, analysis, and on-the-ground perspective from our luxury real estate advisory desk.',
    url: 'https://fivedimensions.in/insights',
  },
};

function prerender() {
  console.log('Running post-build metadata pre-rendering...');

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Error: Base template not found at ${TEMPLATE_PATH}. Run vite build first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  // Pre-render Opportunities Page
  const opportunitiesDir = path.join(DIST_DIR, 'opportunities');
  if (!fs.existsSync(opportunitiesDir)) {
    fs.mkdirSync(opportunitiesDir, { recursive: true });
  }
  const oppHtml = injectMetadata(baseHtml, PAGE_METADATA.opportunities);
  fs.writeFileSync(path.join(opportunitiesDir, 'index.html'), oppHtml);
  console.log('Generated pre-rendered dist/opportunities/index.html');

  // Pre-render Insights Page
  const insightsDir = path.join(DIST_DIR, 'insights');
  if (!fs.existsSync(insightsDir)) {
    fs.mkdirSync(insightsDir, { recursive: true });
  }
  const insHtml = injectMetadata(baseHtml, PAGE_METADATA.insights);
  fs.writeFileSync(path.join(insightsDir, 'index.html'), insHtml);
  console.log('Generated pre-rendered dist/insights/index.html');

  // Modify base dist/index.html for Homepage specifically
  const homeMeta = {
    title: "Delhi NCR's Foremost Real Estate Advisory Desk | Five Dimensions",
    description: 'We source, vet, and manage RERA-compliant, high-yield commercial and residential assets. Protect your capital with our rigorous 47-point due diligence audit.',
    url: 'https://fivedimensions.in',
  };
  const homeHtml = injectMetadata(baseHtml, homeMeta);
  fs.writeFileSync(TEMPLATE_PATH, homeHtml);
  console.log('Updated dist/index.html with home metadata');

  console.log('Metadata pre-rendering successfully completed!');
}

function injectMetadata(html, meta) {
  let modified = html;

  // 1. Replace Title
  const titleRegex = /<title>[^<]*<\/title>/i;
  const newTitle = `<title>${meta.title}</title>`;
  if (titleRegex.test(modified)) {
    modified = modified.replace(titleRegex, newTitle);
  } else {
    modified = modified.replace('</head>', `${newTitle}\n</head>`);
  }

  // 2. Replace or Inject Description
  const descRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
  const newDesc = `<meta name="description" content="${meta.description}" />`;
  if (descRegex.test(modified)) {
    modified = modified.replace(descRegex, newDesc);
  } else {
    modified = modified.replace('</head>', `${newDesc}\n</head>`);
  }

  // 3. Inject Canonical link
  const canonicalLink = `<link rel="canonical" href="${meta.url}" />`;
  modified = modified.replace('</head>', `${canonicalLink}\n</head>`);

  // 4. Inject Open Graph and Twitter Card tags for crawl fallback
  const seoTags = `
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:url" content="${meta.url}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  `;
  modified = modified.replace('</head>', `${seoTags}\n</head>`);

  return modified;
}

prerender();
