import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

const PAGE_METADATA = {
  opportunities: {
    title: 'Noida Property Listings & Investments | Five Dimensions',
    description: 'Find prime flats in Noida, commercial property, and residential plots for investment. Browse pre-vetted apartment buying and land opportunities.',
    url: 'https://fivedimensions.in/opportunities',
  },
  insights: {
    title: 'Noida Real Estate Insights & Guides | Five Dimensions',
    description: 'Stay updated on the Noida real estate market. Read expert property investment guides, flats in Noida analysis, and land valuation insights.',
    url: 'https://fivedimensions.in/insights',
  },
  aboutUs: {
    title: 'About Us | Real Estate Advisory | Five Dimensions',
    description: 'Discover the story behind Five Dimensions, Noida\'s premier real estate consultancy. Led by industry experts Sachin Jain and Praveen Kushwah.',
    url: 'https://fivedimensions.in/about-us',
  },
  contactUs: {
    title: 'Contact Us | Premium Property Advisory | Five Dimensions',
    description: 'Get in touch with Noida\'s leading real estate consultancy. Reach our experts for pre-vetted land, commercial and luxury residential properties.',
    url: 'https://fivedimensions.in/contact-us',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Five Dimensions',
    description: 'Read the Privacy Policy of Five Dimensions to understand how we collect, use, and protect your personal information.',
    url: 'https://fivedimensions.in/privacy-policy',
  },
  termsConditions: {
    title: 'Terms & Conditions | Five Dimensions',
    description: 'Review the Terms & Conditions governing the use of Five Dimensions services, website, and advisory platform.',
    url: 'https://fivedimensions.in/terms-conditions',
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

  // Pre-render About Us Page
  const aboutDir = path.join(DIST_DIR, 'about-us');
  if (!fs.existsSync(aboutDir)) {
    fs.mkdirSync(aboutDir, { recursive: true });
  }
  const aboutHtml = injectMetadata(baseHtml, PAGE_METADATA.aboutUs);
  fs.writeFileSync(path.join(aboutDir, 'index.html'), aboutHtml);
  console.log('Generated pre-rendered dist/about-us/index.html');

  // Pre-render Contact Us Page
  const contactDir = path.join(DIST_DIR, 'contact-us');
  if (!fs.existsSync(contactDir)) {
    fs.mkdirSync(contactDir, { recursive: true });
  }
  const contactHtml = injectMetadata(baseHtml, PAGE_METADATA.contactUs);
  fs.writeFileSync(path.join(contactDir, 'index.html'), contactHtml);
  console.log('Generated pre-rendered dist/contact-us/index.html');

  // Pre-render Privacy Policy Page
  const privacyDir = path.join(DIST_DIR, 'privacy-policy');
  if (!fs.existsSync(privacyDir)) {
    fs.mkdirSync(privacyDir, { recursive: true });
  }
  const privacyHtml = injectMetadata(baseHtml, PAGE_METADATA.privacyPolicy);
  fs.writeFileSync(path.join(privacyDir, 'index.html'), privacyHtml);
  console.log('Generated pre-rendered dist/privacy-policy/index.html');

  // Pre-render Terms & Conditions Page
  const termsDir = path.join(DIST_DIR, 'terms-conditions');
  if (!fs.existsSync(termsDir)) {
    fs.mkdirSync(termsDir, { recursive: true });
  }
  const termsHtml = injectMetadata(baseHtml, PAGE_METADATA.termsConditions);
  fs.writeFileSync(path.join(termsDir, 'index.html'), termsHtml);
  console.log('Generated pre-rendered dist/terms-conditions/index.html');

  // Modify base dist/index.html for Homepage specifically
  const homeMeta = {
    title: "Noida Property Investment & Advisory | Five Dimensions",
    description: "Five Dimensions is Noida's premier real estate and property investment advisory. Secure pre-vetted land, commercial property, and luxury residential investments.",
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
