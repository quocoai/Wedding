# DoraStudio 📷

A professional **Photography Studio** React template built with **Vite + React 19**.

## Features

| Section | Description |
|---|---|
| **Navbar** | Fixed, transparent-to-white on scroll, mobile hamburger menu |
| **Hero** | Full-height banner with animated title, stats, and scroll hint |
| **Services** | 6-card grid (Wedding, Portrait, Family, Commercial, Events, Travel) |
| **Portfolio** | Filterable masonry-style gallery with lightbox viewer |
| **About** | Studio story, image block, and team member cards |
| **Testimonials** | Interactive carousel with dot + thumbnail navigation |
| **Contact** | Booking enquiry form with validation & success state |
| **Footer** | Multi-column footer with social links |

## Tech Stack

- React 19
- Vite 4
- Pure CSS (CSS custom properties, no external UI library)
- Google Fonts — Playfair Display & Lato

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Customisation

- **Colors / fonts** — edit `:root` variables in `src/index.css`
- **Content** — update the data arrays in each component (e.g., `SERVICES`, `PHOTOS`, `REVIEWS`)
- **Real photos** — replace the `color`/emoji placeholders in `Portfolio.jsx` with `<img>` tags or an image URL
- **Form submission** — add your backend/email-service call in `Contact.jsx → handleSubmit`
