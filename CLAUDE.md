# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Deployment

```bash
vercel --prod    # Deploy to production
```

- **Production URL**: https://ectdgroup.com (pending DNS configuration)
- **Vercel Project**: gus-projects-e01fc15d/ectd
- Google Sheets integration configured via Vercel environment variables

## Architecture

Single-page landing site for eCTD Group (Brazilian pharma regulatory tech). Built with Next.js 15 App Router, Tailwind CSS v4, deployed to Vercel.

### Tech Stack
- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS v4** - Theme defined in `src/app/globals.css` using `@theme inline`
- **React Hook Form + Zod v4** - Form validation
- **Lucide React** - Icons
- **Google Sheets API** - Waitlist form submissions

### Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 theme (colors, fonts)
│   ├── layout.tsx           # Root layout with Inter font
│   ├── page.tsx             # Landing page (assembles sections)
│   └── api/waitlist/route.ts # POST endpoint → Google Sheets
├── components/
│   ├── ui/                  # Reusable: Button, Card, Input, Select, Container
│   ├── layout/              # Header (sticky + mobile nav), Footer
│   └── sections/            # Hero, HowItWorks, Features, Security, WaitlistForm
└── lib/
    ├── utils.ts             # cn() helper (clsx + tailwind-merge)
    └── schemas/waitlist.ts  # Zod schema with corporate email validation
```

### Page Sections (in order)
1. **Hero** - Main headline (97% time reduction), subtitle, CTAs, trust badges (ANVISA, eCTD 4.0, LGPD)
2. **HowItWorks** - 8-feature grid with check icons, split layout (header left, features right)
3. **Features** - 6 feature cards with icons
4. **Security** - Dark background, 4 security pillars, trust badges
5. **WaitlistForm** - Lead capture form with Zod validation, corporate email only

### Color Palette

Primary teal (`#008E97`) and secondary coral (`#FC4C02`). Use Tailwind classes like `bg-primary`, `text-secondary`, `border-primary-dark`.

### Language

All UI text is in PT-BR. Error messages, labels, and content should remain in Portuguese.

### Environment Variables

```
GOOGLE_SHEETS_CREDENTIALS      # Service account JSON (single line)
GOOGLE_SHEETS_SPREADSHEET_ID   # Target spreadsheet ID
```

The form works without these configured (logs warning, returns success).
