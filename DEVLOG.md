# Development log

## 11 November 2026 — Day 1: Foundation

- Scaffolded a React and Vite application with React Router and Vercel deep-link rewrites.
- Added the required source folders, centralized placeholder content, shared components, and Home and project-detail route shells.
- Added the stitched dark theme tokens and base styles, including Google Fonts declarations, responsive gutters, and focus styling.
- Added project README and run instructions. No page section content was built beyond the Day 1 hero and empty section shells.
- Build verification: `npm run build` passed with Vite 6.4.6.

## 12 November 2026 — Day 2: Hero, About, Experience

- Built the left-aligned hero with the software engineer label, name, all-caps intro placeholder, and email call to action. Wide layout reserves an empty column beside the copy for future project content.
- Replaced the About shell with structured who, what, and focus placeholders plus the requested shows-and-knitting personal note placeholder.
- Added EY and CONVENDA LABS internship entries in a dashed timeline with round stitch markers and bordered panels.
- Kept all new copy in `src/data/content.js`; added responsive layout rules using the existing 640px and 960px breakpoints.
- Build verification: `npm run build` passed with Vite 6.4.6.
