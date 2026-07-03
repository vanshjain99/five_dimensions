# Five Dimensions

A modern luxury real estate landing page built with React, TypeScript, Vite, and Tailwind CSS.

Five Dimensions is designed as a premium, conversion-focused single-page experience that showcases advisory services and guides visitors toward consultation inquiries.

---

## Overview

This project presents a polished dark-themed real estate website with strong visual hierarchy, premium styling, and clear content flow.

Core goals of the landing page:

- Communicate trust and expertise quickly
- Present services and differentiators clearly
- Drive users to submit a consultation form
- Deliver a responsive experience across devices

---

## Features

- Luxury-focused dark UI with gold-accent visual language
- Responsive design for mobile, tablet, and desktop
- Structured one-page section flow for conversion
- Modular React component architecture
- Modern frontend setup for fast development and builds

---

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide React**

---

## Project Structure

```text
.
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   ├── components/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   │   ├── faqs.ts
│   │   ├── insights.ts
│   │   ├── leadership.ts
│   │   ├── navigation.ts
│   │   ├── opportunities.ts
│   │   ├── process.ts
│   │   ├── reasons.ts
│   │   ├── stats.ts
│   │   └── testimonials.ts
│   ├── lib/
│   │   └── supabaseClient.ts
│   ├── main.tsx
│   ├── sections/
│   │   ├── CtaSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InsightsSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── OpportunitiesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── WhyChooseSection.tsx
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── globals.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── constants.ts
├── guidelines/
├── index.html
├── package.json
├── postcss.config.mjs
├── vite.config.ts
├── default_shadcn_theme.css
├── ATTRIBUTIONS.md
├── LICENSE
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

Check installed versions:

```bash
node -v
npm -v
```

### Installation

```bash
git clone https://github.com/vanshjain99/five_dimensions.git
cd five_dimensions
npm install
```

### Run Development Server

```bash
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

---

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build optimized production output
- `npm run preview` — Preview production build locally

---

## Production Build

```bash
npm run build
npm run preview
```

The production assets are generated in the `dist/` directory.

---

## Deployment

You can deploy this project to any static hosting provider, such as:

- Vercel
- Netlify
- GitHub Pages

Typical deployment steps:

1. Build the app with `npm run build`
2. Deploy the `dist/` folder

---

## Design Source

Figma reference:
https://www.figma.com/design/Rh0IfvK2wYqCvMD5KqrPXu/Luxury-Real-Estate-Landing-Page

---

## Roadmap

Potential improvements:

- Consultation form backend integration
- Client/server-side form validation
- Submission success and error handling states
- SEO enhancements (metadata, OG tags, sitemap)
- Analytics and conversion event tracking
- Accessibility review and refinements
- CMS-based content management for testimonials/services

---

## Contributing

Contributions are welcome.

1. Fork this repository
2. Create a branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "feat: add your change"
   ```
4. Push branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## Issues

If you find a bug or want to request a feature, open an issue:
https://github.com/vanshjain99/five_dimensions/issues

---

## License

This repository includes a `LICENSE` file.

See `LICENSE` for usage terms.
