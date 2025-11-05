# Delta Tire - Professional Automotive Services

## Overview

Delta Tire is a multi-location automotive service business providing comprehensive web presence for its operations across New Mexico and Arizona. The platform offers detailed information on tire services, auto repair, maintenance, and specialized programs like VIP school fundraising and fleet services. With four physical locations, the application focuses on local SEO, customer communication, and service transparency, aiming to enhance customer engagement and streamline service inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

-   **Framework**: React 18 with TypeScript, Vite for build/dev, Wouter for routing.
-   **UI/UX**: shadcn/ui (based on Radix UI) with Tailwind CSS for styling, using CSS variables for theming and CVA for component variants. Features a "New York" style variant.
-   **State Management**: TanStack Query for server state (infinite stale time, disabled refetching), React hooks for local state, React Hook Form with Zod for form management.
-   **Key Features**:
    -   Comprehensive service pages for tires, oil changes, brakes, alignment, auto repair, and truck accessories.
    -   Dedicated tire brands showcase with 18 major brands, categorized by price range.
    -   Individual location pages for all 4 locations (Grants, Gallup, Farmington, Eagar) with local SEO optimization, structured data, and geo tags.
    -   Integrated blog with articles, category filtering, search, and individual article pages.
    -   SMS-based appointment booking system and "Call or Text Now" feature linking directly to location-specific contacts.
    -   Redesigned contact page emphasizing SMS communication.
    -   Consolidated VIP Fundraising program page with an embedded sign-up form.
    -   Tire Pros branding and dedicated warranty page.
    -   Dynamic SEO component with meta tags, Open Graph, and structured data support.

### Backend

-   **Framework**: Express.js with TypeScript.
-   **API**: RESTful API under `/api/*` with JSON format, error handling, and request logging.
-   **Storage**: In-memory storage (`MemStorage`) designed for future migration to PostgreSQL via Drizzle ORM.

## External Dependencies

-   **Database**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver (schema defined, not actively connected).
-   **Form Validation**: Zod for runtime type validation, integrated with React Hook Form.
-   **Styling & UI**: Tailwind CSS, Radix UI, Lucide React (icons), date-fns.
-   **Google Integration**: Google Apps Script for VIP fundraising form submissions (webhook integration to Google Sheets and email notifications).
-   **Analytics & Tracking**: Reachcode tracking script from LocaliQ (installed in global header for conversion tracking and marketing analytics).
-   **Replit-Specific**: Runtime error overlay, Cartographer plugin, development banner, Replit Connectors for OAuth (GitHub).
-   **Build Tools**: esbuild, tsx, Vite plugins.