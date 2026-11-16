# Development log

## 11 November 2026 - Day 1: Foundation

- Scaffolded a React and Vite application with React Router and Vercel deep-link rewrites.
- Added the required source folders, centralized placeholder content, shared components, and Home and project-detail route shells.
- Added the  theme tokens and base styles, including Google Fonts declarations, responsive gutters, and focus styling.
- Added project README and run instructions. No page section content was built beyond the Day 1 hero and empty section shells.
- Build verification: `npm run build` passed with Vite 6.4.6.

## 12 November 2026 - Day 2: Hero, About, Experience

- Built the left-aligned hero with the software engineer label, name, all-caps intro placeholder, and email call to action. Wide layout reserves an empty column beside the copy for future project content.
- Replaced the About shell with structured who, what, and focus placeholders plus the requested shows-and-knitting personal note placeholder.
- Added EY and CONVENDA LABS internship entries.
- Kept all new copy in `src/data/content.js`; added responsive layout rules using the existing 640px and 960px breakpoints.
- Build verification: `npm run build` passed with Vite 6.4.6.

## 14 November 2026 - Day 3: Projects, Contact, Footer

- Built three  ProjectCard entries with image placeholders, stack tags, and conditional live/repository actions; project two alone links to its details route.
- Added the contact mailto call to action and LinkedIn link, and completed the footer navigation and copyright.
- Build verification: `npm run build` passed with Vite 6.4.6.

## 15 November 2026 - Day 4: Project Details

- Built the `/projects/:slug` details view for project two, including description, problem, features, screenshot placeholders, technologies, and learning placeholder.
- Linked project two's card to the details route and added a return link to the projects section.
- Build verification: `npm run build` passed with Vite 6.4.6. The build reports an existing malformed selector in `src/styles/home.css`.

## 16 November 2026 - Day 5: Final Polish

- Reviewed the home page, project details page, and not-found route at 360px, 768px, and 1280px. Fixed mobile text overflow, made the About grid shrink safely, and corrected the malformed desktop project-grid rule.
- Checked heading hierarchy, image alt text, focus-visible styles, page titles, metadata, and text contrast. Page titles and descriptions now update for the home page, project details, and not-found page.
- Kept the remaining stitch details on dividers, the experience timeline, and image frames; retained the requested clean card and detail panel outlines. Replaced hard-coded interface copy with values from `src/data/content.js` and corrected copy typos.
- Removed the unused placeholder component and stylesheet, stale placeholder selectors, an unused import, and redundant component options. Finalized the README with run/build steps and the live URL.
- Build verification: `npm run build` passed with Vite 6.4.6.
