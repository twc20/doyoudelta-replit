# Delta Tire Static Website - Deployment Guide

## Overview

This is a complete static HTML/CSS/JavaScript website optimized for SEO, LLM-scraping, and Bluehost hosting. The site is ready for direct upload to any web server.

## What's Included

### ✅ Completed Pages (12)

**Core Pages:**
- `index.html` - Homepage with full hero, services, locations, and CTAs
- `services.html` - Services overview page
- `about.html` - About page with company history and team video
- `locations.html` - All 4 locations with maps and contact info
- `contact.html` - Contact page with all location details
- `appointments.html` - SMS-based appointment booking system
- `blog.html` - Blog index with search and filtering
- `tire-brands.html` - (to be created)
- `faq.html` - (to be created)

**Service Pages (1/8 complete):**
- `services/tires.html` ✅
- `services/oil-change.html` (to be created)
- `services/brakes.html` (to be created)
- `services/alignment.html` (to be created)
- `services/auto-repair.html` (to be created)
- `services/truck-accessories.html` (to be created)
- `services/batteries.html` (to be created)
- `services/ac-heater.html` (to be created)

**Special Pages:**
- `tire-pros-warranty.html` ✅
- `careers.html` ✅
- `vip.html` (to be created)
- `fleet.html` (to be created)

**Blog Articles (0/6 created):**
- `blog/when-to-replace-tires.html` (to be created)
- `blog/oil-change-myths.html` (to be created)
- `blog/at-vs-mt-tires.html` (to be created)
- `blog/brake-warning-signs.html` (to be created)
- `blog/winter-driving-tips.html` (to be created)
- `blog/alignment-saves-money.html` (to be created)

### ✅ Assets & Functionality

**CSS/JS:**
- `assets/css/styles.css` - Complete responsive stylesheet with red gradient theme
- `assets/js/main.js` - Full interactivity (mobile menu, location modal, blog search/filter, FAQ accordion, appointment SMS)

**SEO Files:**
- `sitemap.xml` - Complete XML sitemap for search engines
- `robots.txt` - Search engine crawling rules
- `.htaccess` - Apache configuration with:
  - HTTPS redirection
  - Clean URLs (removes .html extensions)
  - Browser caching
  - GZIP compression
  - Security headers

## Key Features

### 1. **SMS-Based Contact System**
- "Call or Text Now" buttons throughout site
- Location selector modal pops up on click
- Pre-populated SMS messages for each location
- Message: "Hey! I was on your website and need to schedule a visit. Can you help me out?"

### 2. **SEO Optimization**
- Every page has unique title and meta description
- LocalBusiness structured data (JSON-LD) on homepage
- Semantic HTML5 markup
- Clean URLs via .htaccess
- Comprehensive sitemap.xml

### 3. **Mobile-First Design**
- Fully responsive on all devices
- Mobile hamburger menu
- Touch-friendly buttons and interactions
- Optimized for small screens

### 4. **Performance**
- Pure vanilla JavaScript (no frameworks)
- Minimal dependencies
- Browser caching configured
- GZIP compression enabled
- Optimized images (when added)

## Deployment Instructions

### Step 1: Upload to Bluehost

1. **Access File Manager:**
   - Log into Bluehost cPanel
   - Open File Manager
   - Navigate to `public_html` directory

2. **Upload Files:**
   - Select all files from `/static-site` directory
   - Upload to `public_html` (or subdomain folder)
   - Ensure `.htaccess` is included (it's a hidden file)

3. **Set Permissions:**
   - Files: 644
   - Directories: 755
   - `.htaccess`: 644

### Step 2: Configure Domain

1. **Primary Domain:**
   - If using `doyoudelta.com` as primary, files go in `public_html`
   - The site will be live at `https://doyoudelta.com`

2. **Subdomain:**
   - Create subdomain in Bluehost (e.g., `www.doyoudelta.com`)
   - Upload files to subdomain directory
   - Update sitemap.xml URLs if needed

### Step 3: Test

**Critical Tests:**
1. Homepage loads correctly
2. All navigation links work
3. "Call or Text Now" buttons open location modal
4. SMS links work on mobile devices
5. Blog search and filtering function
6. Mobile menu works
7. Clean URLs work (no .html in address bar)

### Step 4: Update Content (if needed)

**Phone Numbers:**
- Grants: (505) 287-7946
- Gallup: (505) 722-2945
- Farmington: (505) 325-4500
- Eagar: (928) 333-3730

**To change phone numbers:**
1. Search for old number in all HTML files
2. Replace with new number
3. Re-upload affected files

## File Structure

```
static-site/
├── index.html                 # Homepage
├── about.html
├── services.html
├── locations.html
├── contact.html
├── appointments.html
├── blog.html
├── tire-brands.html
├── tire-pros-warranty.html
├── careers.html
├── vip.html
├── fleet.html
├── faq.html
├── sitemap.xml
├── robots.txt
├── .htaccess
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── services/
│   ├── tires.html
│   ├── oil-change.html
│   ├── brakes.html
│   ├── alignment.html
│   ├── auto-repair.html
│   ├── truck-accessories.html
│   ├── batteries.html
│   └── ac-heater.html
└── blog/
    ├── when-to-replace-tires.html
    ├── oil-change-myths.html
    ├── at-vs-mt-tires.html
    ├── brake-warning-signs.html
    ├── winter-driving-tips.html
    └── alignment-saves-money.html
```

## Technical Specifications

**Browser Support:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Fonts:**
- Inter (loaded from Google Fonts CDN)

**Colors:**
- Primary Red: #dc2626
- Dark Red: #991b1b
- Gray scale: #1f2937, #374151, #4b5563, #6b7280, #9ca3af
- Backgrounds: #f9fafb, #ffffff

**Breakpoints:**
- Mobile: < 768px
- Desktop: ≥ 768px

## Still Needed (Development)

1. **Create 7 remaining service pages** (oil-change, brakes, alignment, auto-repair, truck-accessories, batteries, ac-heater)
2. **Create 6 blog article pages** with full content
3. **Create tire-brands page** showcasing all 18 tire brands
4. **Create VIP and Fleet pages** for special programs
5. **Create FAQ page** with searchable accordion
6. **Add company images** (optional - can add to `assets/images/` folder)
7. **404 error page** for better UX

## Maintenance

**To Add New Content:**
1. Create new HTML file using existing pages as template
2. Update sitemap.xml with new URL
3. Add navigation link if needed
4. Upload to server

**To Update Existing Content:**
1. Download HTML file from server
2. Edit content
3. Re-upload to server
4. Clear browser cache to see changes

## Support

For technical issues with deployment, contact Bluehost support. For website content or functionality questions, refer to this documentation or the source files.

---

**Built:** October 2025  
**Version:** 1.0  
**Framework:** Vanilla HTML/CSS/JavaScript  
**Hosting:** Optimized for Bluehost/cPanel
