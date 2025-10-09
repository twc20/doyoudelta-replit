# Delta Tire - Professional Automotive Services

## Overview

Delta Tire is a multi-location automotive service business operating across New Mexico and Arizona. The application serves as a comprehensive web presence featuring service information, location details, and customer engagement tools. The platform provides information about tire services, auto repair, maintenance, and specialized programs including VIP school fundraising and fleet services. With four physical locations (Grants, Gallup, Farmington NM, and Eagar AZ), the application emphasizes local SEO, customer communication, and service transparency.

**Company History**: Founded in 2015, Delta Tire has 10 years of experience serving the Four Corners region with professional automotive services.

## Recent Changes (October 2025)

**Tire Pros Branding & Warranty**
- Added Tire Pros logo to website footer with "Proud Member of" designation
- Created comprehensive Tire Pros Warranty page (`/tire-pros-warranty`)
- Redesigned warranty page to match TirePros.com aesthetic:
  - Clean white background with alternating sections
  - Red checkmarks for bullet lists (#e31837 Tire Pros red)
  - Simple, professional layout with generous white space
  - Hero section with dark background
  - 24/7 roadside assistance prominence (1-844-281-0747)
- Warranty coverage includes:
  - Nationwide Service Protection Plan (24 months/24,000 miles)
  - Free 24/7 Roadside Assistance with every purchase
  - Optional Tire Protection Plan (36 months)
  - $350 Promise guarantee
- Added "Warranty" button to main navigation (desktop and mobile)

**Company Branding Update**
- Updated all references from 1995 founding date to correct 2015 founding date
- Changed "30+ years" to "10 years" of experience across entire website

**Individual Service Pages**
- Created 6 dedicated service pages with comprehensive information:
  - `/services/tires` - Tire sales, installation, and repair
  - `/services/oil-change` - Oil change and fluid services
  - `/services/brakes` - Brake repair and replacement
  - `/services/alignment` - Wheel alignment and suspension
  - `/services/auto-repair` - General automotive repair
  - `/services/truck-accessories` - Truck upgrades and accessories
- Each page includes service details, benefits, process overview, and CTAs

**Tire Brands Showcase**
- Created comprehensive tire brands data file (`shared/tire-brands.ts`) with 18 major brands
- Each brand includes: name, description, specialties, tire types, price range, warranty info
- Built dedicated tire brands page (`/tire-brands`) showcasing all brands
- Organized by price range: Premium/Ultra, Mid-Range, Budget
- Includes popular brands section and tire selection guidance

**Blog & Content Hub**
- Added "Blog" to main navigation menu (desktop and mobile)
- Created blog articles data file (`shared/blog-articles.ts`) with 12 automotive articles
- Built full-featured blog page (`/blog`) with:
  - Featured articles section
  - Category filtering (Tire Maintenance, Safety, Maintenance Tips, etc.)
  - Search functionality (by title, excerpt, tags)
  - Newsletter signup
- All articles include metadata: author, date (updated to Sept 2025), category, tags, excerpts
- Individual article pages (`/blog/:slug`) with:
  - Full article content with HTML formatting
  - Related articles section
  - Call-to-action sections for appointments and locations
  - Back navigation and SEO optimization
- Featured articles have comprehensive content:
  - "When Should You Replace Your Tires? 5 Warning Signs"
  - "Oil Change Myths: How Often Do You Really Need Service?"
  - "All-Terrain vs. Mud-Terrain Tires: Which is Right for Your Truck?"

**SMS-Based Appointment Booking**
- Completely redesigned appointments page from form-based to SMS-based booking
- Features:
  - Location dropdown (4 locations with phone numbers)
  - Service dropdown (11 service options)
  - One-click SMS messaging to selected location
  - Pre-programmed message: "Hey, I was on your website and want to schedule an appointment for [service] at your [location] location."
  - Mobile-first design with "How It Works" guide
  - Fallback phone numbers for direct calling

**Call or Text Now Feature**
- Created location selector dialog for all call buttons site-wide
- Shows popup with all 4 locations when "Call or Text Now" is clicked
- Each location displays:
  - Location name and address
  - Phone number
  - Side-by-side "Call Now" and "Text Now" buttons
- Implemented on:
  - Homepage CTAs (2 buttons)
  - All 8 service pages
  - Mobile header menu
- Uses `tel:` and `sms:` protocols for native mobile integration

**Contact Page Redesign**
- Removed contact form (non-functional)
- Replaced with location selector dialog for texting
- Features:
  - Prominent "Text Us Now" button that opens location selector popup
  - Users select their nearest location and text directly via SMS
  - Contact information cards showing phone numbers, locations, hours, and appointments link
  - Consistent with SMS-based communication strategy across the site
- No backend needed - fully client-side functionality

**VIP Fundraising Program Consolidation**
- Consolidated two separate fundraising tiers (60% and 75%) into single generic program
- New unified page at `/vip-fundraising.html` with modern, professional design
- Updated messaging: Organizations get 80%+ of proceeds, Delta keeps small admin fee
- Legacy URLs redirect automatically:
  - `/fundraising-program-60.html` → `/vip-fundraising.html`
  - `/fundraising-program-75.html` → `/vip-fundraising.html`
- Page features:
  - Gradient hero section with main value proposition
  - Stats section: 80%+ to organization, $0 upfront costs, 100% real value
  - "How It Works" 3-step process with numbered icons
  - VIP card image showcase (updated with cleaned version)
  - Benefits cards (Free Oil Change, 10% Off All Services, $50 Off Shield Leasing)
  - Sign-up form with proper validation and error handling
- Page styling:
  - Header and footer match React component styling for consistency
  - Sticky white header with Delta Tire logo, navigation menu, mobile menu
  - Dark footer with 4-column layout, social links, Tire Pros logo
  - Fully responsive design matching site-wide patterns
- Form implementation:
  - Blocks submission when Google Apps Script webhook not configured (shows alert)
  - Uses `mode: 'no-cors'` to bypass CORS restrictions with Google Apps Script
  - Sends form data to Google Sheets via webhook
  - Shows success message after submission (data is reliably sent even though response cannot be read due to no-cors)
  - Helpful error messages with all location phone numbers on network failure
  - All interactive elements have data-testid attributes for testing
- Google Apps Script Integration:
  - Webhook URL configured: `https://script.google.com/macros/s/AKfycbyPDz_58UBkhkQ3-2t3nwwVDEqIfSnU-RdP-2YMKVoPEC6LCL2U2nlUYzB8LwJvLQmf2g/exec`
  - Saves submissions to Google Sheets with timestamp, student/parent info, organization, notes
  - Sends email notification to admin on each new signup
  - Deployed as "Anyone" can access for public form submissions

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library based on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming (supports light mode with extensibility for dark mode)
- Class Variance Authority (CVA) for component variant management
- "New York" style variant from shadcn/ui

**State Management Strategy**
- TanStack Query handles all server state with infinite stale time and disabled automatic refetching
- React hooks for local component state
- Form state managed via React Hook Form with Zod validation
- Toast notifications for user feedback

**Directory Structure**
- `/client/src/pages/*` - Route-based page components
  - `/client/src/pages/services/*` - Individual service pages (tires, oil-change, brakes, etc.)
- `/client/src/components/shared/*` - Reusable business components (Header, Footer, SEO, etc.)
- `/client/src/components/ui/*` - shadcn/ui component library
- `/client/src/lib/*` - Utility functions and shared logic
- `/client/src/hooks/*` - Custom React hooks
- `/shared/*` - Shared data files and schemas
  - `/shared/tire-brands.ts` - Comprehensive tire brands database
  - `/shared/blog-articles.ts` - Blog articles content and metadata
  - `/shared/schema.ts` - Type definitions and validation schemas

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API routes and middleware
- HTTP server creation for potential WebSocket support
- Custom request logging middleware tracking response times and payloads

**Development vs Production**
- Development: Vite middleware integration for HMR and module transformation
- Production: Pre-built static assets served from `/dist/public`
- Environment-based configuration via NODE_ENV

**API Design Pattern**
- RESTful API endpoints under `/api/*` namespace
- JSON request/response format
- Error handling middleware with status code normalization
- Response truncation in logs (80 character limit) for cleaner debugging

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for user data
- Interface-based storage abstraction (`IStorage`) for future database integration
- Current implementation uses Maps for data persistence during runtime
- Designed for eventual migration to PostgreSQL via Drizzle ORM

### External Dependencies

**Database (Configured but Not Active)**
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- **Neon Database** serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema location: `/shared/schema.ts`
- Migration output: `/migrations` directory
- Note: Database structure defined but may not be actively connected

**GitHub Integration**
- **Octokit REST API** client for GitHub repository interactions
- Token-based authentication using Replit Connectors
- Dynamic token refresh via Replit's connector API
- Repository management: `twc20/LindyAI-Doyoudelta`
- Uncached client pattern (new client per request due to token expiration)

**Form Validation & Schema**
- **Zod** for runtime type validation and schema definition
- **Drizzle-Zod** integration for database schema validation
- Shared schemas between frontend and backend (`/shared/schema.ts`)
- React Hook Form resolver integration via `@hookform/resolvers`

**Styling & UI**
- **Tailwind CSS** with PostCSS for processing
- **Radix UI** primitives for accessible components
- **Lucide React** for icon components
- **date-fns** for date formatting and manipulation
- Google Fonts (Inter) loaded via CDN

**Replit-Specific Integrations**
- Runtime error overlay for development
- Cartographer plugin for code navigation
- Development banner plugin
- Connector system for OAuth (GitHub) with auto-refresh tokens

**Build & Development Tools**
- **esbuild** for server-side bundling in production
- **tsx** for TypeScript execution in development
- **Vite plugins** for React, error overlays, and Replit integrations

### Authentication & Sessions

- Basic user schema defined with username/password fields
- No active authentication middleware implemented
- Session infrastructure prepared via `connect-pg-simple` (PostgreSQL session store)
- Ready for implementation of authentication flows

### SEO & Analytics

- Custom SEO component with dynamic meta tag management
- Open Graph protocol support for social sharing
- Structured data (JSON-LD) capability for local business schema
- Canonical URL support
- Per-page SEO customization

### Content & Data Structure

**Location Data**
- Four physical locations with distinct addresses, phone numbers, and hours:
  - Grants, NM: (505) 287-7946
  - Gallup, NM: (505) 722-2945
  - Farmington, NM: (505) 325-4500
  - Eagar, AZ: (928) 333-3730
- Google Maps integration via direct URL links
- Structured for local SEO optimization
- Each location configured for SMS appointment booking

**Service Categories (with dedicated pages)**
- Tire & Wheel Sales/Service (`/services/tires`)
- Oil Change & Maintenance (`/services/oil-change`)
- Brake Repair (`/services/brakes`)
- Wheel Alignment & Suspension (`/services/alignment`)
- Auto Repair (`/services/auto-repair`)
- Truck Accessories (`/services/truck-accessories`)
- Battery & Electrical (planned)
- Heating & A/C (planned)

**Tire Brands Database**
- 18 major tire brands with complete specifications
- Organized by price range: Premium/Ultra-Premium, Mid-Range, Budget
- Each brand includes: description, specialties, tire types, price range, warranty
- Popular brands flagged for homepage/featured displays
- Helper functions: `getBrandByName()`, `brandsByPriceRange`, `popularBrands`

**Blog & Content**
- 12 automotive articles covering maintenance, safety, and buying guides
- Categories: Tire Maintenance, Safety, Maintenance Tips, Tire Guide, Truck Accessories, Fleet Services
- Each article includes: title, slug, excerpt, author, date, category, tags, featured flag
- Featured articles highlighted on blog page
- Search and filter functionality for content discovery

**Appointment Booking**
- SMS-based booking system (no backend required)
- User selects location and service via dropdowns
- Opens phone's messaging app with pre-programmed message
- Direct SMS to location-specific phone numbers
- Fallback to direct phone calling for non-mobile devices

**Special Programs**
- VIP School Fundraising Program
- Fleet Services for businesses
- Both implemented as informational pages