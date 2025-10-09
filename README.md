# Delta Tire Website

Professional automotive service website for Delta Tire - serving New Mexico and Arizona since 2015.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:5000` to see the site.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── client/               # Frontend React application
│   ├── public/          # Static files (served as-is)
│   │   ├── fundraising-program-60.html
│   │   ├── fundraising-program-75.html
│   │   └── assets/      # CSS, JS, images
│   └── src/             # React components and pages
├── server/              # Express backend server
├── shared/              # Shared types and data
│   ├── tire-brands.ts   # Tire brands database
│   └── blog-articles.ts # Blog content
└── dist/                # Production build output (auto-generated)
```

## 🔧 Key Features

- **Multi-location Business**: 4 locations across NM & AZ
- **VIP Fundraising Program**: Two pricing tiers ($60 and $75)
- **Blog & Content Hub**: 12 automotive articles with search/filter
- **Tire Brands Showcase**: 18 major tire brands
- **SMS-based Booking**: Direct contact via text/call
- **SEO Optimized**: Schema.org markup for all pages

## 🌐 Deployment

### Vercel (Current - Static Site)
The site is deployed as a **static site** (no backend required in production):

1. **Connected to GitHub**: `twc20/doyoudelta-replit`
2. **Auto-deploys** on push to `main` branch
3. **Build command**: `npm run build`
4. **Output directory**: `dist/public`

### Why Static?
- ✅ Fundraising forms → Client-side Google Sheets integration
- ✅ Appointments → Direct SMS links (no backend needed)
- ✅ Contact form → Frontend-only (can add Google Apps Script later)
- ✅ All content is static (blog, services, locations)
- ✅ Faster, cheaper, more reliable than running a Node.js server

### Environment Variables
None required for production. Backend features (Express server, GitHub API) are development-only.

## 📝 VIP Fundraising Pages

The VIP card fundraising system has two A/B test versions:

- `/fundraising-program-60.html` - $60 card (org keeps $50)
- `/fundraising-program-75.html` - $75 card (org keeps $60)

### Setup Required:
1. **Google Apps Script Webhook**: Replace `YOUR_APPS_SCRIPT_WEBHOOK_URL` in both HTML files
2. **VIP Card Image**: Replace placeholder image with actual card artwork
3. **Test**: Submit form to verify data flows to Google Sheets

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: TanStack Query (React Query)
- **Database**: PostgreSQL (optional - currently using in-memory storage)
- **Routing**: Wouter (lightweight React routing)

## 📦 Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run db:push` - Sync database schema (if using database)

## 🔗 Important Links

- **GitHub**: https://github.com/twc20/doyoudelta-replit
- **Live Site**: [Your Vercel URL]
- **Replit Project**: [Your Replit URL]

## 📄 License

© 2025 Delta Tire. All rights reserved.
